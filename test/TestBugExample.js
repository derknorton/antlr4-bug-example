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

var language = require('../BugExample');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Parser': function(test) {
        var testValues = ['5.27e-15', '-5.3e22','e', '-e', 'expo', '-expo'];
        var expectedResults = [
            'RealExpressionContext',      // positive real number
            'RealExpressionContext',      // negative real number
            'RealExpressionContext',      // positive real constant
            'RealExpressionContext',      // positive real constant
            'VariableExpressionContext',  // variable value
            'InversionExpressionContext'  // negative variable value
        ];
        test.expect(testValues.length);
        for (var i = 0; i < testValues.length; i++) {
            var value = testValues[i];
            console.log('\nTesting: ' + value);
            var expression = language.parseValue(value).getChild(0);
            test.strictEqual(expression.constructor.name, expectedResults[i]);
        }
        test.done();
    }
});
