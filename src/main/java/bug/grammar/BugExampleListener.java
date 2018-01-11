// Generated from BugExample.g4 by ANTLR 4.7
package bug.grammar;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link BugExampleParser}.
 */
public interface BugExampleListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link BugExampleParser#value}.
	 * @param ctx the parse tree
	 */
	void enterValue(BugExampleParser.ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link BugExampleParser#value}.
	 * @param ctx the parse tree
	 */
	void exitValue(BugExampleParser.ValueContext ctx);
	/**
	 * Enter a parse tree produced by the {@code constantReal}
	 * labeled alternative in {@link BugExampleParser#real}.
	 * @param ctx the parse tree
	 */
	void enterConstantReal(BugExampleParser.ConstantRealContext ctx);
	/**
	 * Exit a parse tree produced by the {@code constantReal}
	 * labeled alternative in {@link BugExampleParser#real}.
	 * @param ctx the parse tree
	 */
	void exitConstantReal(BugExampleParser.ConstantRealContext ctx);
	/**
	 * Enter a parse tree produced by the {@code variableReal}
	 * labeled alternative in {@link BugExampleParser#real}.
	 * @param ctx the parse tree
	 */
	void enterVariableReal(BugExampleParser.VariableRealContext ctx);
	/**
	 * Exit a parse tree produced by the {@code variableReal}
	 * labeled alternative in {@link BugExampleParser#real}.
	 * @param ctx the parse tree
	 */
	void exitVariableReal(BugExampleParser.VariableRealContext ctx);
	/**
	 * Enter a parse tree produced by {@link BugExampleParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(BugExampleParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link BugExampleParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(BugExampleParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code realExpression}
	 * labeled alternative in {@link BugExampleParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterRealExpression(BugExampleParser.RealExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code realExpression}
	 * labeled alternative in {@link BugExampleParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitRealExpression(BugExampleParser.RealExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code inversionExpression}
	 * labeled alternative in {@link BugExampleParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterInversionExpression(BugExampleParser.InversionExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code inversionExpression}
	 * labeled alternative in {@link BugExampleParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitInversionExpression(BugExampleParser.InversionExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code factorialExpression}
	 * labeled alternative in {@link BugExampleParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterFactorialExpression(BugExampleParser.FactorialExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code factorialExpression}
	 * labeled alternative in {@link BugExampleParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitFactorialExpression(BugExampleParser.FactorialExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code variableExpression}
	 * labeled alternative in {@link BugExampleParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterVariableExpression(BugExampleParser.VariableExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code variableExpression}
	 * labeled alternative in {@link BugExampleParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitVariableExpression(BugExampleParser.VariableExpressionContext ctx);
}