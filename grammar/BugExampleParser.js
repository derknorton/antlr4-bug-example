// Generated from grammar/BugExample.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BugExampleListener = require('./BugExampleListener').BugExampleListener;
var BugExampleVisitor = require('./BugExampleVisitor').BugExampleVisitor;

var grammarFileName = "BugExample.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\t%\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0005\u0003\u000f\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0013",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005\u001c\n\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005 \n\u0005\f\u0005\u000e\u0005#\u000b\u0005\u0003\u0005",
    "\u0002\u0003\b\u0006\u0002\u0004\u0006\b\u0002\u0002%\u0002\n\u0003",
    "\u0002\u0002\u0002\u0004\u0012\u0003\u0002\u0002\u0002\u0006\u0014\u0003",
    "\u0002\u0002\u0002\b\u001b\u0003\u0002\u0002\u0002\n\u000b\u0005\b\u0005",
    "\u0002\u000b\f\u0007\u0002\u0002\u0003\f\u0003\u0003\u0002\u0002\u0002",
    "\r\u000f\u0007\u0003\u0002\u0002\u000e\r\u0003\u0002\u0002\u0002\u000e",
    "\u000f\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010",
    "\u0013\u0007\u0006\u0002\u0002\u0011\u0013\u0007\u0007\u0002\u0002\u0012",
    "\u000e\u0003\u0002\u0002\u0002\u0012\u0011\u0003\u0002\u0002\u0002\u0013",
    "\u0005\u0003\u0002\u0002\u0002\u0014\u0015\u0007\b\u0002\u0002\u0015",
    "\u0007\u0003\u0002\u0002\u0002\u0016\u0017\b\u0005\u0001\u0002\u0017",
    "\u0018\u0007\u0003\u0002\u0002\u0018\u001c\u0005\b\u0005\u0003\u0019",
    "\u001c\u0005\u0004\u0003\u0002\u001a\u001c\u0005\u0006\u0004\u0002\u001b",
    "\u0016\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b",
    "\u001a\u0003\u0002\u0002\u0002\u001c!\u0003\u0002\u0002\u0002\u001d",
    "\u001e\f\u0004\u0002\u0002\u001e \u0007\u0004\u0002\u0002\u001f\u001d",
    "\u0003\u0002\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003\u0002",
    "\u0002\u0002!\"\u0003\u0002\u0002\u0002\"\t\u0003\u0002\u0002\u0002",
    "#!\u0003\u0002\u0002\u0002\u0006\u000e\u0012\u001b!"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'-'", "'!'" ];

var symbolicNames = [ 'null', 'null', 'null', "FRACTION", "CONSTANT", "FLOAT", 
                      "IDENTIFIER", "SPACE" ];

var ruleNames =  [ "value", "real", "variable", "expression" ];

function BugExampleParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BugExampleParser.prototype = Object.create(antlr4.Parser.prototype);
BugExampleParser.prototype.constructor = BugExampleParser;

Object.defineProperty(BugExampleParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BugExampleParser.EOF = antlr4.Token.EOF;
BugExampleParser.T__0 = 1;
BugExampleParser.T__1 = 2;
BugExampleParser.FRACTION = 3;
BugExampleParser.CONSTANT = 4;
BugExampleParser.FLOAT = 5;
BugExampleParser.IDENTIFIER = 6;
BugExampleParser.SPACE = 7;

BugExampleParser.RULE_value = 0;
BugExampleParser.RULE_real = 1;
BugExampleParser.RULE_variable = 2;
BugExampleParser.RULE_expression = 3;

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BugExampleParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ValueContext.prototype.EOF = function() {
    return this.getToken(BugExampleParser.EOF, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BugExampleVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BugExampleParser.ValueContext = ValueContext;

BugExampleParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BugExampleParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.expression(0);
        this.state = 9;
        this.match(BugExampleParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RealContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BugExampleParser.RULE_real;
    return this;
}

RealContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RealContext.prototype.constructor = RealContext;


 
RealContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VariableRealContext(parser, ctx) {
	RealContext.call(this, parser);
    RealContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableRealContext.prototype = Object.create(RealContext.prototype);
VariableRealContext.prototype.constructor = VariableRealContext;

BugExampleParser.VariableRealContext = VariableRealContext;

VariableRealContext.prototype.FLOAT = function() {
    return this.getToken(BugExampleParser.FLOAT, 0);
};
VariableRealContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.enterVariableReal(this);
	}
};

VariableRealContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.exitVariableReal(this);
	}
};

VariableRealContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BugExampleVisitor ) {
        return visitor.visitVariableReal(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstantRealContext(parser, ctx) {
	RealContext.call(this, parser);
    RealContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantRealContext.prototype = Object.create(RealContext.prototype);
ConstantRealContext.prototype.constructor = ConstantRealContext;

BugExampleParser.ConstantRealContext = ConstantRealContext;

ConstantRealContext.prototype.CONSTANT = function() {
    return this.getToken(BugExampleParser.CONSTANT, 0);
};
ConstantRealContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.enterConstantReal(this);
	}
};

ConstantRealContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.exitConstantReal(this);
	}
};

ConstantRealContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BugExampleVisitor ) {
        return visitor.visitConstantReal(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BugExampleParser.RealContext = RealContext;

BugExampleParser.prototype.real = function() {

    var localctx = new RealContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BugExampleParser.RULE_real);
    var _la = 0; // Token type
    try {
        this.state = 16;
        switch(this._input.LA(1)) {
        case BugExampleParser.T__0:
        case BugExampleParser.CONSTANT:
            localctx = new ConstantRealContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 12;
            _la = this._input.LA(1);
            if(_la===BugExampleParser.T__0) {
                this.state = 11;
                this.match(BugExampleParser.T__0);
            }

            this.state = 14;
            this.match(BugExampleParser.CONSTANT);
            break;
        case BugExampleParser.FLOAT:
            localctx = new VariableRealContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 15;
            this.match(BugExampleParser.FLOAT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BugExampleParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.IDENTIFIER = function() {
    return this.getToken(BugExampleParser.IDENTIFIER, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BugExampleVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BugExampleParser.VariableContext = VariableContext;

BugExampleParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BugExampleParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.match(BugExampleParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BugExampleParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function RealExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RealExpressionContext.prototype = Object.create(ExpressionContext.prototype);
RealExpressionContext.prototype.constructor = RealExpressionContext;

BugExampleParser.RealExpressionContext = RealExpressionContext;

RealExpressionContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};
RealExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.enterRealExpression(this);
	}
};

RealExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.exitRealExpression(this);
	}
};

RealExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BugExampleVisitor ) {
        return visitor.visitRealExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InversionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InversionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InversionExpressionContext.prototype.constructor = InversionExpressionContext;

BugExampleParser.InversionExpressionContext = InversionExpressionContext;

InversionExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
InversionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.enterInversionExpression(this);
	}
};

InversionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.exitInversionExpression(this);
	}
};

InversionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BugExampleVisitor ) {
        return visitor.visitInversionExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactorialExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactorialExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FactorialExpressionContext.prototype.constructor = FactorialExpressionContext;

BugExampleParser.FactorialExpressionContext = FactorialExpressionContext;

FactorialExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
FactorialExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.enterFactorialExpression(this);
	}
};

FactorialExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.exitFactorialExpression(this);
	}
};

FactorialExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BugExampleVisitor ) {
        return visitor.visitFactorialExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VariableExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableExpressionContext.prototype = Object.create(ExpressionContext.prototype);
VariableExpressionContext.prototype.constructor = VariableExpressionContext;

BugExampleParser.VariableExpressionContext = VariableExpressionContext;

VariableExpressionContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
VariableExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.enterVariableExpression(this);
	}
};

VariableExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugExampleListener ) {
        listener.exitVariableExpression(this);
	}
};

VariableExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BugExampleVisitor ) {
        return visitor.visitVariableExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BugExampleParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, BugExampleParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            localctx = new InversionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 21;
            this.match(BugExampleParser.T__0);
            this.state = 22;
            this.expression(1);
            break;

        case 2:
            localctx = new RealExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 23;
            this.real();
            break;

        case 3:
            localctx = new VariableExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 24;
            this.variable();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 31;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new FactorialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, BugExampleParser.RULE_expression);
                this.state = 27;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 28;
                this.match(BugExampleParser.T__1); 
            }
            this.state = 33;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


BugExampleParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 3:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

BugExampleParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.BugExampleParser = BugExampleParser;
