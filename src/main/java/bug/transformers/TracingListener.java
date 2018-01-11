/** **********************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 *********************************************************************** */
package bug.transformers;

import bug.grammar.*;
import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

public class TracingListener extends BugExampleBaseListener {

    static private final XLogger logger = XLoggerFactory.getXLogger(TracingListener.class);

    public void enterConstantReal(BugExampleParser.ConstantRealContext ctx) {
        logger.info("enterConstantReal");
    }

    public void exitConstantReal(BugExampleParser.ConstantRealContext ctx) {
        logger.info("exitConstantReal");
    }

    public void enterValue(BugExampleParser.ValueContext ctx) {
        logger.info("enterValue");
    }

    public void exitValue(BugExampleParser.ValueContext ctx) {
        logger.info("exitValue");
    }

    public void enterVariableReal(BugExampleParser.VariableRealContext ctx) {
        logger.info("enterVariableReal");
    }

    public void exitVariableReal(BugExampleParser.VariableRealContext ctx) {
        logger.info("exitVariableReal");
    }

    public void enterVariable(BugExampleParser.VariableContext ctx) {
        logger.info("enterVariable");
    }

    public void exitVariable(BugExampleParser.VariableContext ctx) {
        logger.info("exitVariable");
    }

    public void enterRealExpression(BugExampleParser.RealExpressionContext ctx) {
        logger.info("enterRealExpression");
    }

    public void exitRealExpression(BugExampleParser.RealExpressionContext ctx) {
        logger.info("exitRealExpression");
    }

    public void enterVariableExpression(BugExampleParser.VariableExpressionContext ctx) {
        logger.info("enterVariableExpression");
    }

    public void exitVariableExpression(BugExampleParser.VariableExpressionContext ctx) {
        logger.info("exitVariableExpression");
    }

    public void enterInversionExpression(BugExampleParser.InversionExpressionContext ctx) {
        logger.info("enterInversionExpression");
    }

    public void exitInversionExpression(BugExampleParser.InversionExpressionContext ctx) {
        logger.info("exitInversionExpression");
    }

}
