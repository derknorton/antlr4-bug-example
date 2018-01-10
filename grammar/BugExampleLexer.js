// Generated from grammar/BugExample.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\nO\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0007\u0005 \n\u0005\f\u0005\u000e\u0005#\u000b\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006*",
    "\n\u0006\u0003\u0007\u0003\u0007\u0005\u0007.\n\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u00072\n\u0007\u0003\b\u0003\b\u0007\b6\n\b\f\b\u000e\b",
    "9\u000b\b\u0003\t\u0006\t<\n\t\r\t\u000e\t=\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0007\nD\n\n\f\n\u000e\nG\u000b\n\u0003\u000b\u0003\u000b\u0005",
    "\u000bK\n\u000b\u0003\u000b\u0005\u000bN\n\u000b\u0002\u0002\f\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u0002\u0015\u0002\u0003\u0002\u0005\u0004\u0002C\\c|\u0005",
    "\u00022;C\\c|\u0005\u0002\u000b\f\u000f\u000f\"\"U\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0003\u0017\u0003",
    "\u0002\u0002\u0002\u0005\u0019\u0003\u0002\u0002\u0002\u0007\u001b\u0003",
    "\u0002\u0002\u0002\t\u001d\u0003\u0002\u0002\u0002\u000b)\u0003\u0002",
    "\u0002\u0002\r+\u0003\u0002\u0002\u0002\u000f3\u0003\u0002\u0002\u0002",
    "\u0011;\u0003\u0002\u0002\u0002\u0013A\u0003\u0002\u0002\u0002\u0015",
    "M\u0003\u0002\u0002\u0002\u0017\u0018\u0007/\u0002\u0002\u0018\u0004",
    "\u0003\u0002\u0002\u0002\u0019\u001a\u00071\u0002\u0002\u001a\u0006",
    "\u0003\u0002\u0002\u0002\u001b\u001c\u0007,\u0002\u0002\u001c\b\u0003",
    "\u0002\u0002\u0002\u001d!\u00070\u0002\u0002\u001e \u00042;\u0002\u001f",
    "\u001e\u0003\u0002\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003",
    "\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"$\u0003\u0002\u0002\u0002",
    "#!\u0003\u0002\u0002\u0002$%\u00043;\u0002%\n\u0003\u0002\u0002\u0002",
    "&*\u0007g\u0002\u0002\'(\u0007r\u0002\u0002(*\u0007k\u0002\u0002)&\u0003",
    "\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002*\f\u0003\u0002\u0002\u0002",
    "+-\u0005\u0015\u000b\u0002,.\u0005\t\u0005\u0002-,\u0003\u0002\u0002",
    "\u0002-.\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002\u0002/0\u0007g",
    "\u0002\u000202\u0005\u0015\u000b\u00021/\u0003\u0002\u0002\u000212\u0003",
    "\u0002\u0002\u00022\u000e\u0003\u0002\u0002\u000237\t\u0002\u0002\u0002",
    "46\t\u0003\u0002\u000254\u0003\u0002\u0002\u000269\u0003\u0002\u0002",
    "\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u00028\u0010\u0003",
    "\u0002\u0002\u000297\u0003\u0002\u0002\u0002:<\t\u0004\u0002\u0002;",
    ":\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002",
    "\u0002=>\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?@\b\t\u0002",
    "\u0002@\u0012\u0003\u0002\u0002\u0002AE\u00043;\u0002BD\u00042;\u0002",
    "CB\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002",
    "\u0002EF\u0003\u0002\u0002\u0002F\u0014\u0003\u0002\u0002\u0002GE\u0003",
    "\u0002\u0002\u0002HN\u00072\u0002\u0002IK\u0007/\u0002\u0002JI\u0003",
    "\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002",
    "LN\u0005\u0013\n\u0002MH\u0003\u0002\u0002\u0002MJ\u0003\u0002\u0002",
    "\u0002N\u0016\u0003\u0002\u0002\u0002\f\u0002!)-17=EJM\u0003\u0002\u0003",
    "\u0002"].join("");


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
BugExampleLexer.T__1 = 2;
BugExampleLexer.T__2 = 3;
BugExampleLexer.FRACTION = 4;
BugExampleLexer.CONSTANT = 5;
BugExampleLexer.FLOAT = 6;
BugExampleLexer.IDENTIFIER = 7;
BugExampleLexer.SPACE = 8;


BugExampleLexer.modeNames = [ "DEFAULT_MODE" ];

BugExampleLexer.literalNames = [ 'null', "'-'", "'/'", "'*'" ];

BugExampleLexer.symbolicNames = [ 'null', 'null', 'null', 'null', "FRACTION", 
                                  "CONSTANT", "FLOAT", "IDENTIFIER", "SPACE" ];

BugExampleLexer.ruleNames = [ "T__0", "T__1", "T__2", "FRACTION", "CONSTANT", 
                              "FLOAT", "IDENTIFIER", "SPACE", "NATURAL", 
                              "INTEGER" ];

BugExampleLexer.grammarFileName = "BugExample.g4";



exports.BugExampleLexer = BugExampleLexer;

