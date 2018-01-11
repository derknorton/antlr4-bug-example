// Generated from grammar/BugExample.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by BugExampleParser.

function BugExampleVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

BugExampleVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
BugExampleVisitor.prototype.constructor = BugExampleVisitor;

// Visit a parse tree produced by BugExampleParser#value.
BugExampleVisitor.prototype.visitValue = function(ctx) {
};


// Visit a parse tree produced by BugExampleParser#constantReal.
BugExampleVisitor.prototype.visitConstantReal = function(ctx) {
};


// Visit a parse tree produced by BugExampleParser#variableReal.
BugExampleVisitor.prototype.visitVariableReal = function(ctx) {
};


// Visit a parse tree produced by BugExampleParser#variable.
BugExampleVisitor.prototype.visitVariable = function(ctx) {
};


// Visit a parse tree produced by BugExampleParser#realExpression.
BugExampleVisitor.prototype.visitRealExpression = function(ctx) {
};


// Visit a parse tree produced by BugExampleParser#inversionExpression.
BugExampleVisitor.prototype.visitInversionExpression = function(ctx) {
};


// Visit a parse tree produced by BugExampleParser#factorialExpression.
BugExampleVisitor.prototype.visitFactorialExpression = function(ctx) {
};


// Visit a parse tree produced by BugExampleParser#variableExpression.
BugExampleVisitor.prototype.visitVariableExpression = function(ctx) {
};



exports.BugExampleVisitor = BugExampleVisitor;