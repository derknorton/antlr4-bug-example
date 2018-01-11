/** **********************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 *********************************************************************** */
package bug;

import bug.grammar.BugExampleParser.ExpressionContext;
import java.io.IOException;
import org.junit.AfterClass;
import static org.junit.Assert.assertEquals;
import org.junit.BeforeClass;
import org.junit.Test;
import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

public class BugExampleTest {

    static private final XLogger logger = XLoggerFactory.getXLogger(BugExampleTest.class);

    @BeforeClass
    static public void setUpClass() {
        logger.info("Running BugExample Unit Tests...\n");
    }

    @AfterClass
    static public void tearDownClass() {
        logger.info("Completed BugExample Unit Tests.\n");
    }

    @Test
    public void testBugExample() throws IOException {
        logger.info("Testing various expressions for correct parsing...");

        final String[] testValues = {"5.27e-15", "-5.3e22", "e", "-e", "expo", "-expo"};
        final String[] expectedResults = {
            "bug.grammar.BugExampleParser.RealExpressionContext", // positive real number
            "bug.grammar.BugExampleParser.RealExpressionContext", // negative real number
            "bug.grammar.BugExampleParser.RealExpressionContext", // positive real constant
            "bug.grammar.BugExampleParser.RealExpressionContext", // positive real constant
            "bug.grammar.BugExampleParser.VariableExpressionContext", // variable value
            "bug.grammar.BugExampleParser.InversionExpressionContext" // negative variable value
        };

        for (int i = 0; i < testValues.length; i++) {
            String value = testValues[i];
            logger.info("\nTesting: " + value);
            ExpressionContext expression = BugExample.parseValue(value).expression();
            assertEquals(expectedResults[i], expression.getClass().getCanonicalName());
        }

        logger.info("The expression parsing testing completed.");
    }

}
