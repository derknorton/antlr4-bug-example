grammar BugExample;

// Rule Definitions

value: expression EOF ;

real:
    '-'? CONSTANT    #constantReal |
    FLOAT            #variableReal
;

variable: IDENTIFIER ;

expression:  // Precedence (highest to lowest)
    real                              #realExpression      |
    variable                          #variableExpression  |
//  expression '!'                    #factorialExpression |
    op=('-' | '/' | '*') expression   #inversionExpression
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

