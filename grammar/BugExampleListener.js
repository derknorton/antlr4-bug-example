// Generated from grammar/BugExample.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by BugExampleParser.
function BugExampleListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

BugExampleListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
BugExampleListener.prototype.constructor = BugExampleListener;

// Enter a parse tree produced by BugExampleParser#value.
BugExampleListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by BugExampleParser#value.
BugExampleListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by BugExampleParser#constantReal.
BugExampleListener.prototype.enterConstantReal = function(ctx) {
};

// Exit a parse tree produced by BugExampleParser#constantReal.
BugExampleListener.prototype.exitConstantReal = function(ctx) {
};


// Enter a parse tree produced by BugExampleParser#variableReal.
BugExampleListener.prototype.enterVariableReal = function(ctx) {
};

// Exit a parse tree produced by BugExampleParser#variableReal.
BugExampleListener.prototype.exitVariableReal = function(ctx) {
};


// Enter a parse tree produced by BugExampleParser#variable.
BugExampleListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by BugExampleParser#variable.
BugExampleListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by BugExampleParser#realExpression.
BugExampleListener.prototype.enterRealExpression = function(ctx) {
};

// Exit a parse tree produced by BugExampleParser#realExpression.
BugExampleListener.prototype.exitRealExpression = function(ctx) {
};


// Enter a parse tree produced by BugExampleParser#inversionExpression.
BugExampleListener.prototype.enterInversionExpression = function(ctx) {
};

// Exit a parse tree produced by BugExampleParser#inversionExpression.
BugExampleListener.prototype.exitInversionExpression = function(ctx) {
};


// Enter a parse tree produced by BugExampleParser#factorialExpression.
BugExampleListener.prototype.enterFactorialExpression = function(ctx) {
};

// Exit a parse tree produced by BugExampleParser#factorialExpression.
BugExampleListener.prototype.exitFactorialExpression = function(ctx) {
};


// Enter a parse tree produced by BugExampleParser#variableExpression.
BugExampleListener.prototype.enterVariableExpression = function(ctx) {
};

// Exit a parse tree produced by BugExampleParser#variableExpression.
BugExampleListener.prototype.exitVariableExpression = function(ctx) {
};



exports.BugExampleListener = BugExampleListener;