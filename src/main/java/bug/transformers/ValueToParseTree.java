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
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;

public class ValueToParseTree {

    public BugExampleParser.ValueContext parseValue(String source) {
        CodePointCharStream chars = CharStreams.fromString(source);
        BugExampleLexer lexer = new BugExampleLexer(chars);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        BugExampleParser parser = new BugExampleParser(tokens);
        parser.setBuildParseTree(true);
        BugExampleParser.ValueContext value = parser.value();
        ParseTreeWalker walker = new ParseTreeWalker();
        TracingListener tracer = new TracingListener();
        walker.walk(tracer, value);
        return value;
    }

}
