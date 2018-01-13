// Generated from grammar/BugExample.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\tK\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0007\u0004\u001c\n\u0004\f\u0004",
    "\u000e\u0004\u001f\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005&\n\u0005\u0003\u0006\u0003\u0006\u0005",
    "\u0006*\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006.\n\u0006\u0003\u0007",
    "\u0003\u0007\u0007\u00072\n\u0007\f\u0007\u000e\u00075\u000b\u0007\u0003",
    "\b\u0006\b8\n\b\r\b\u000e\b9\u0003\b\u0003\b\u0003\t\u0003\t\u0007\t",
    "@\n\t\f\t\u000e\tC\u000b\t\u0003\n\u0003\n\u0005\nG\n\n\u0003\n\u0005",
    "\nJ\n\n\u0002\u0002\u000b\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\u0002\u0013\u0002\u0003\u0002\u0005\u0004",
    "\u0002C\\c|\u0005\u00022;C\\c|\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "Q\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0003\u0015\u0003\u0002\u0002",
    "\u0002\u0005\u0017\u0003\u0002\u0002\u0002\u0007\u0019\u0003\u0002\u0002",
    "\u0002\t%\u0003\u0002\u0002\u0002\u000b\'\u0003\u0002\u0002\u0002\r",
    "/\u0003\u0002\u0002\u0002\u000f7\u0003\u0002\u0002\u0002\u0011=\u0003",
    "\u0002\u0002\u0002\u0013I\u0003\u0002\u0002\u0002\u0015\u0016\u0007",
    "/\u0002\u0002\u0016\u0004\u0003\u0002\u0002\u0002\u0017\u0018\u0007",
    "#\u0002\u0002\u0018\u0006\u0003\u0002\u0002\u0002\u0019\u001d\u0007",
    "0\u0002\u0002\u001a\u001c\u00042;\u0002\u001b\u001a\u0003\u0002\u0002",
    "\u0002\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e \u0003\u0002\u0002",
    "\u0002\u001f\u001d\u0003\u0002\u0002\u0002 !\u00043;\u0002!\b\u0003",
    "\u0002\u0002\u0002\"&\u0007g\u0002\u0002#$\u0007r\u0002\u0002$&\u0007",
    "k\u0002\u0002%\"\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002&",
    "\n\u0003\u0002\u0002\u0002\')\u0005\u0013\n\u0002(*\u0005\u0007\u0004",
    "\u0002)(\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*-\u0003\u0002",
    "\u0002\u0002+,\u0007g\u0002\u0002,.\u0005\u0013\n\u0002-+\u0003\u0002",
    "\u0002\u0002-.\u0003\u0002\u0002\u0002.\f\u0003\u0002\u0002\u0002/3",
    "\t\u0002\u0002\u000202\t\u0003\u0002\u000210\u0003\u0002\u0002\u0002",
    "25\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002",
    "\u00024\u000e\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000268\t",
    "\u0004\u0002\u000276\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u0002",
    "97\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002",
    "\u0002;<\b\b\u0002\u0002<\u0010\u0003\u0002\u0002\u0002=A\u00043;\u0002",
    ">@\u00042;\u0002?>\u0003\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002",
    "A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B\u0012\u0003\u0002",
    "\u0002\u0002CA\u0003\u0002\u0002\u0002DJ\u00072\u0002\u0002EG\u0007",
    "/\u0002\u0002FE\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002GH",
    "\u0003\u0002\u0002\u0002HJ\u0005\u0011\t\u0002ID\u0003\u0002\u0002\u0002",
    "IF\u0003\u0002\u0002\u0002J\u0014\u0003\u0002\u0002\u0002\f\u0002\u001d",
    "%)-39AFI\u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function BugExampleLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

BugExampleLexer.prototype = Object.create(antlr4.Lexer.prototype);
BugExampleLexer.prototype.constructor = BugExampleLexer;

Object.defineProperty(BugExampleLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

BugExampleLexer.EOF = antlr4.Token.EOF;
BugExampleLexer.T__0 = 1;
BugExampleLexer.T__1 = 2;
BugExampleLexer.FRACTION = 3;
BugExampleLexer.CONSTANT = 4;
BugExampleLexer.FLOAT = 5;
BugExampleLexer.IDENTIFIER = 6;
BugExampleLexer.SPACE = 7;

BugExampleLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

BugExampleLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

BugExampleLexer.prototype.literalNames = [ null, "'-'", "'!'" ];

BugExampleLexer.prototype.symbolicNames = [ null, null, null, "FRACTION", 
                                            "CONSTANT", "FLOAT", "IDENTIFIER", 
                                            "SPACE" ];

BugExampleLexer.prototype.ruleNames = [ "T__0", "T__1", "FRACTION", "CONSTANT", 
                                        "FLOAT", "IDENTIFIER", "SPACE", 
                                        "NATURAL", "INTEGER" ];

BugExampleLexer.prototype.grammarFileName = "BugExample.g4";



exports.BugExampleLexer = BugExampleLexer;

