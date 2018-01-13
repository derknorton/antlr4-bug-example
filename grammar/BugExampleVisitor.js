// Generated from grammar/BugExample.g4 by ANTLR 4.7.1
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
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BugExampleParser#constantReal.
BugExampleVisitor.prototype.visitConstantReal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BugExampleParser#variableReal.
BugExampleVisitor.prototype.visitVariableReal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BugExampleParser#variable.
BugExampleVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BugExampleParser#realExpression.
BugExampleVisitor.prototype.visitRealExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BugExampleParser#inversionExpression.
BugExampleVisitor.prototype.visitInversionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BugExampleParser#factorialExpression.
BugExampleVisitor.prototype.visitFactorialExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BugExampleParser#variableExpression.
BugExampleVisitor.prototype.visitVariableExpression = function(ctx) {
  return this.visitChildren(ctx);
};



exports.BugExampleVisitor = BugExampleVisitor;