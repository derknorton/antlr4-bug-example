/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/
'use strict';

var antlr = require('antlr4');
var grammar = require('../grammar');
var TracingListener = require('./TracingListener').TracingListener;


function ValueToParseTree() {
    return this;
}
ValueToParseTree.prototype.constructor = ValueToParseTree;
exports.ValueToParseTree = ValueToParseTree;


ValueToParseTree.prototype.parseValue = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BugExampleLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BugExampleParser(tokens);
    parser.buildParseTrees = true;
    var value = parser.value();
    var walker = new antlr.tree.ParseTreeWalker();
    var tracer = new TracingListener();
    walker.walk(tracer, value);
    return value;
};

