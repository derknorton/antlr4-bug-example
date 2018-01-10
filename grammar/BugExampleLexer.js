// Generated from grammar/BugExample.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\bG\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0007\u0003\u0018\n\u0003\f\u0003\u000e\u0003\u001b\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\"",
    "\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005&\n\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005*\n\u0005\u0003\u0006\u0003\u0006\u0007\u0006.\n\u0006",
    "\f\u0006\u000e\u00061\u000b\u0006\u0003\u0007\u0006\u00074\n\u0007\r",
    "\u0007\u000e\u00075\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0007\b",
    "<\n\b\f\b\u000e\b?\u000b\b\u0003\t\u0003\t\u0005\tC\n\t\u0003\t\u0005",
    "\tF\n\t\u0002\u0002\n\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\u0002\u0011\u0002\u0003\u0002\u0005\u0004\u0002C\\",
    "c|\u0005\u00022;C\\c|\u0005\u0002\u000b\f\u000f\u000f\"\"M\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0003\u0013",
    "\u0003\u0002\u0002\u0002\u0005\u0015\u0003\u0002\u0002\u0002\u0007!",
    "\u0003\u0002\u0002\u0002\t#\u0003\u0002\u0002\u0002\u000b+\u0003\u0002",
    "\u0002\u0002\r3\u0003\u0002\u0002\u0002\u000f9\u0003\u0002\u0002\u0002",
    "\u0011E\u0003\u0002\u0002\u0002\u0013\u0014\u0007/\u0002\u0002\u0014",
    "\u0004\u0003\u0002\u0002\u0002\u0015\u0019\u00070\u0002\u0002\u0016",
    "\u0018\u00042;\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u001b",
    "\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a",
    "\u0003\u0002\u0002\u0002\u001a\u001c\u0003\u0002\u0002\u0002\u001b\u0019",
    "\u0003\u0002\u0002\u0002\u001c\u001d\u00043;\u0002\u001d\u0006\u0003",
    "\u0002\u0002\u0002\u001e\"\u0007g\u0002\u0002\u001f \u0007r\u0002\u0002",
    " \"\u0007k\u0002\u0002!\u001e\u0003\u0002\u0002\u0002!\u001f\u0003\u0002",
    "\u0002\u0002\"\b\u0003\u0002\u0002\u0002#%\u0005\u0011\t\u0002$&\u0005",
    "\u0005\u0003\u0002%$\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002",
    "&)\u0003\u0002\u0002\u0002\'(\u0007g\u0002\u0002(*\u0005\u0011\t\u0002",
    ")\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*\n\u0003\u0002",
    "\u0002\u0002+/\t\u0002\u0002\u0002,.\t\u0003\u0002\u0002-,\u0003\u0002",
    "\u0002\u0002.1\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003",
    "\u0002\u0002\u00020\f\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u0002",
    "24\t\u0004\u0002\u000232\u0003\u0002\u0002\u000245\u0003\u0002\u0002",
    "\u000253\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000267\u0003\u0002",
    "\u0002\u000278\b\u0007\u0002\u00028\u000e\u0003\u0002\u0002\u00029=",
    "\u00043;\u0002:<\u00042;\u0002;:\u0003\u0002\u0002\u0002<?\u0003\u0002",
    "\u0002\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>\u0010",
    "\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@F\u00072\u0002\u0002",
    "AC\u0007/\u0002\u0002BA\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002",
    "\u0002CD\u0003\u0002\u0002\u0002DF\u0005\u000f\b\u0002E@\u0003\u0002",
    "\u0002\u0002EB\u0003\u0002\u0002\u0002F\u0012\u0003\u0002\u0002\u0002",
    "\f\u0002\u0019!%)/5=BE\u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function BugExampleLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

BugExampleLexer.prototype = Object.create(antlr4.Lexer.prototype);
BugExampleLexer.prototype.constructor = BugExampleLexer;

BugExampleLexer.EOF = antlr4.Token.EOF;
BugExampleLexer.T__0 = 1;
BugExampleLexer.FRACTION = 2;
BugExampleLexer.CONSTANT = 3;
BugExampleLexer.FLOAT = 4;
BugExampleLexer.IDENTIFIER = 5;
BugExampleLexer.SPACE = 6;


BugExampleLexer.modeNames = [ "DEFAULT_MODE" ];

BugExampleLexer.literalNames = [ 'null', "'-'" ];

BugExampleLexer.symbolicNames = [ 'null', 'null', "FRACTION", "CONSTANT", 
                                  "FLOAT", "IDENTIFIER", "SPACE" ];

BugExampleLexer.ruleNames = [ "T__0", "FRACTION", "CONSTANT", "FLOAT", "IDENTIFIER", 
                              "SPACE", "NATURAL", "INTEGER" ];

BugExampleLexer.grammarFileName = "BugExample.g4";



exports.BugExampleLexer = BugExampleLexer;

