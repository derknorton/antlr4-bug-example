/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/
package bug;

import bug.grammar.*;
import bug.transformers.*;


public final class BugExample {

    static public BugExampleParser.ValueContext parseValue(String source) {
        ValueToParseTree transformer = new ValueToParseTree();
        BugExampleParser.ValueContext value = transformer.parseValue(source);
        return value;
    }

}

