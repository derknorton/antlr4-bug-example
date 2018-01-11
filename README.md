### Summary
This project demonstrates an apparent problem with the way antlr4 handles precedence in left recursive expressions.

### Background
I defined the following simple left recursive expression grammar for antlr4:

```
grammar BugExample;

// Rule Definitions

value: expression EOF ;

real:
    '-'? CONSTANT    #constantReal |
    FLOAT            #variableReal
;

variable: IDENTIFIER ;

expression:  // Precedence (highest to lowest)
    real             #realExpression      |
    variable         #variableExpression  |
//  expression '!'   #factorialExpression |
    '-' expression   #inversionExpression
;


// Token Definitions

FRACTION: '.' ('0'..'9')* '1'..'9' ;

CONSTANT: 'e' | 'pi' ;

FLOAT: INTEGER FRACTION? ('e' INTEGER)? ;

IDENTIFIER: ('a'..'z'|'A'..'Z') ('a'..'z'|'A'..'Z'|'0'..'9')* ;

SPACE: (' '|'\t'|'\r'|'\n')+ -> channel(HIDDEN) ;

fragment
NATURAL: '1'..'9' ('0'..'9')* ;

fragment
INTEGER: '0' | '-'? NATURAL ;
```

Notice the commented out factorial expression in the expression types. Also notice that the definition of a FLOAT token allows for negative values so a negative real expression should take precedence over an inversion expression. With the factorial expression commented out, the generated JS parser does indeed parse a negative constant '-e' correctly as a real expression. However, if we uncomment the factorial expression (which should not have anything to do with the test example) and regenerate the parser, the '-e' is suddenly parsed as an inversion expression. Here is the test code showing it:
```
'use strict';

var language = require('../BugExample');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Parser': function(test) {
        var testValues = ['5.27e-15', '-5.3e22','e', '-e', 'expo', '-expo'];
        var expectedResults = [
            'RealExpressionContext',      // positive real number
            'RealExpressionContext',      // negative real number
            'RealExpressionContext',      // positive real constant
            'RealExpressionContext',      // positive real constant
            'VariableExpressionContext',  // variable value
            'InversionExpressionContext'  // negative variable value
        ];
        test.expect(testValues.length);
        for (var i = 0; i < testValues.length; i++) {
            var value = testValues[i];
            console.log('\nTesting: ' + value);
            var expression = language.parseValue(value).getChild(0);
            test.strictEqual(expression.constructor.name, expectedResults[i]);
        }
        test.done();
    }
});
```

It turns out that adding any left recursive sub-rule type listed in the "Definitive Antlr 4 Reference" that begins with the expression e.g. "binary", "ternary", and "unary suffix" expressions, will cause this problem. However, the problem does not show up in the generated Java parser.

I created a GitHub project showing the problem with both JS and Java unit tests to make it easier to experiment and debug: [https://github.com/derknorton/antlr4-bug-example]

When I compare the generated parsers for the JS and Java bindings I found that the Java parser maintains the precedence ordering of the expression sub-rule case blocks in the ExpressionContext:expression() method, but the JS parser randomizes the order of the case blocks once any left recursive sub-rule starting with the expression is added to the expression rule.

I suspect this is the problem but the code is too complex for my poor brain ;-) I need an antlr guru to determine this for sure. I did not check any other language bindings so I can't offer any information about them.

This issue was first raised here: [https://stackoverflow.com/questions/48195702/my-antlr-4-left-recursive-expression-not-preserving-the-expression-precedence-or]

An issue has been submitted at the Antlr 4 GitHub project: [https://github.com/antlr/antlr4/issues/2201]

### Downloading and Installing
To download this project and install it do the following:
```
git clone https://github.com/derknorton/antlr4-bug-example
cd antlr4-bug-example
npm install
```

### Testing
To generate the JavaScript parser using the commented out sub-rule and run the unit tests do the following:
```
grunt generate build
Running "clean:generate" (clean) task
>> 7 paths cleaned.

Running "antlr4:generate" (antlr4) task
wrote ./antlr-2018-01-11-10.20.19.log

Running "clean:build" (clean) task
>> 0 paths cleaned.

Running "jshint:files" (jshint) task
>> 10 files lint free.

Running "nodeunit:tests" (nodeunit) task
Testing TestBugExample.js
Testing: 5.27e-15
enterValue
enterRealExpression
enterVariableReal
exitVariableReal
exitRealExpression
exitValue

Testing: -5.3e22
enterValue
enterRealExpression
enterVariableReal
exitVariableReal
exitRealExpression
exitValue

Testing: e
enterValue
enterRealExpression
enterConstantReal
exitConstantReal
exitRealExpression
exitValue

Testing: -e
enterValue
enterRealExpression
enterConstantReal
exitConstantReal
exitRealExpression
exitValue

Testing: expo
enterValue
enterVariableExpression
enterVariable
exitVariable
exitVariableExpression
exitValue

Testing: -expo
enterValue
enterInversionExpression
enterVariableExpression
enterVariable
exitVariable
exitVariableExpression
exitInversionExpression
exitValue
.OK
>> 6 assertions passed (66ms)

Running "concat:dist" (concat) task

Running "uglify:dist" (uglify) task
>> 1 file created 35.69 kB → 19.53 kB

Done.
```

Now edit the grammar/BugExample.g4 file and uncomment the factorial expression sub-rule. Run the
unit tests again:
```
grunt generate build
Running "clean:generate" (clean) task
>> 7 paths cleaned.

Running "antlr4:generate" (antlr4) task
wrote ./antlr-2018-01-11-10.22.29.log

Running "clean:build" (clean) task
>> 2 paths cleaned.

Running "jshint:files" (jshint) task
>> 10 files lint free.

Running "nodeunit:tests" (nodeunit) task
Testing TestBugExample.js
Testing: 5.27e-15
enterValue
enterRealExpression
enterVariableReal
exitVariableReal
exitRealExpression
exitValue

Testing: -5.3e22
enterValue
enterRealExpression
enterVariableReal
exitVariableReal
exitRealExpression
exitValue

Testing: e
enterValue
enterRealExpression
enterConstantReal
exitConstantReal
exitRealExpression
exitValue

Testing: -e
enterValue
enterInversionExpression
enterRealExpression
enterConstantReal
exitConstantReal
exitRealExpression
exitInversionExpression
exitValue

Testing: expo
enterValue
enterVariableExpression
enterVariable
exitVariable
exitVariableExpression
exitValue

Testing: -expo
enterValue
enterInversionExpression
enterVariableExpression
enterVariable
exitVariable
exitVariableExpression
exitInversionExpression
exitValue
F
>> Test Parser
>> Error: 'InversionExpressionContext' === 'RealExpressionContext'
>>   at Object.Test Parser (test/TestBugExample.js:31:18)
>>   at FSReqWrap.oncomplete (fs.js:153:5)

Warning: 1/6 assertions failed (70ms) Use --force to continue.

Aborted due to warnings.
```

You can see the '-e' string was parsed as an inversion expression rather than a negative constant
real expression.

Now generate and run the Java parser and unit test:
```
mvn clean install
[INFO] Scanning for projects...
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building Antlr 4 Bug Example 1.0-SNAPSHOT
[INFO] ------------------------------------------------------------------------
[INFO] 
[INFO] --- maven-clean-plugin:2.5:clean (default-clean) @ antlr4-bug-example ---
[INFO] Deleting /Users/derk/Development/craterdog-bali/antlr4-bug-example/target
[INFO] 
[INFO] --- antlr4-maven-plugin:4.7:antlr4 (default) @ antlr4-bug-example ---
[INFO] ANTLR 4: Processing source directory /Users/derk/Development/craterdog-bali/antlr4-bug-example/grammar
[INFO] Processing grammar: BugExample.g4
[INFO] 
[INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ antlr4-bug-example ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory /Users/derk/Development/craterdog-bali/antlr4-bug-example/src/main/resources
[INFO] 
[INFO] --- maven-compiler-plugin:3.3:compile (default-compile) @ antlr4-bug-example ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 7 source files to /Users/derk/Development/craterdog-bali/antlr4-bug-example/target/classes
[INFO] 
[INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ antlr4-bug-example ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 1 resource
[INFO] 
[INFO] --- maven-compiler-plugin:3.3:testCompile (default-testCompile) @ antlr4-bug-example ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 1 source file to /Users/derk/Development/craterdog-bali/antlr4-bug-example/target/test-classes
[INFO] 
[INFO] --- maven-surefire-plugin:2.12.4:test (default-test) @ antlr4-bug-example ---
[INFO] Surefire report directory: /Users/derk/Development/craterdog-bali/antlr4-bug-example/target/surefire-reports

-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running bug.BugExampleTest
[INFO] Running BugExample Unit Tests...

[INFO] Testing various expressions for correct parsing...
[INFO] 
Testing: 5.27e-15
[INFO] enterValue
[INFO] enterRealExpression
[INFO] enterVariableReal
[INFO] exitVariableReal
[INFO] exitRealExpression
[INFO] exitValue
[INFO] 
Testing: -5.3e22
[INFO] enterValue
[INFO] enterRealExpression
[INFO] enterVariableReal
[INFO] exitVariableReal
[INFO] exitRealExpression
[INFO] exitValue
[INFO] 
Testing: e
[INFO] enterValue
[INFO] enterRealExpression
[INFO] enterConstantReal
[INFO] exitConstantReal
[INFO] exitRealExpression
[INFO] exitValue
[INFO] 
Testing: -e
[INFO] enterValue
[INFO] enterRealExpression
[INFO] enterConstantReal
[INFO] exitConstantReal
[INFO] exitRealExpression
[INFO] exitValue
[INFO] 
Testing: expo
[INFO] enterValue
[INFO] enterVariableExpression
[INFO] enterVariable
[INFO] exitVariable
[INFO] exitVariableExpression
[INFO] exitValue
[INFO] 
Testing: -expo
[INFO] enterValue
[INFO] enterInversionExpression
[INFO] enterVariableExpression
[INFO] enterVariable
[INFO] exitVariable
[INFO] exitVariableExpression
[INFO] exitInversionExpression
[INFO] exitValue
[INFO] The expression parsing testing completed.
[INFO] Completed BugExample Unit Tests.

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.189 sec

Results :

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0

[INFO] 
[INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ antlr4-bug-example ---
[INFO] Building jar: /Users/derk/Development/craterdog-bali/antlr4-bug-example/target/antlr4-bug-example-1.0-SNAPSHOT.jar
[INFO] 
[INFO] --- maven-install-plugin:2.4:install (default-install) @ antlr4-bug-example ---
[INFO] Installing /Users/derk/Development/craterdog-bali/antlr4-bug-example/target/antlr4-bug-example-1.0-SNAPSHOT.jar to /Users/derk/.m2/repository/derknorton/antlr4-bug-example/1.0-SNAPSHOT/antlr4-bug-example-1.0-SNAPSHOT.jar
[INFO] Installing /Users/derk/Development/craterdog-bali/antlr4-bug-example/pom.xml to /Users/derk/.m2/repository/derknorton/antlr4-bug-example/1.0-SNAPSHOT/antlr4-bug-example-1.0-SNAPSHOT.pom
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 3.734 s
[INFO] Finished at: 2018-01-11T10:25:00-07:00
[INFO] Final Memory: 30M/315M
[INFO] ------------------------------------------------------------------------
```

The Java unit tests worked correctly.

