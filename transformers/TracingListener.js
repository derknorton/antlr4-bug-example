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

var grammar = require('../grammar');

function TracingListener() {
    grammar.BugExampleListener.call(this);
    return this;
}

TracingListener.prototype = Object.create(grammar.BugExampleListener.prototype);
TracingListener.prototype.constructor = TracingListener;

TracingListener.prototype.enterConstantReal = function(ctx) {
    console.log('enterConstantReal');
};

TracingListener.prototype.exitConstantReal = function(ctx) {
    console.log('exitConstantReal');
};


TracingListener.prototype.enterFactorialExpression = function(ctx) {
    console.log('enterFactorialExpression');
};

TracingListener.prototype.exitFactorialExpression = function(ctx) {
    console.log('exitFactorialExpression');
};


TracingListener.prototype.enterValue = function(ctx) {
    console.log('enterValue');
};

TracingListener.prototype.exitValue = function(ctx) {
    console.log('exitValue');
};


TracingListener.prototype.enterVariableReal = function(ctx) {
    console.log('enterVariableReal');
};

TracingListener.prototype.exitVariableReal = function(ctx) {
    console.log('exitVariableReal');
};


TracingListener.prototype.enterVariable = function(ctx) {
    console.log('enterVariable');
};

TracingListener.prototype.exitVariable = function(ctx) {
    console.log('exitVariable');
};


TracingListener.prototype.enterRealExpression = function(ctx) {
    console.log('enterRealExpression');
};

TracingListener.prototype.exitRealExpression = function(ctx) {
    console.log('exitRealExpression');
};


TracingListener.prototype.enterVariableExpression = function(ctx) {
    console.log('enterVariableExpression');
};

TracingListener.prototype.exitVariableExpression = function(ctx) {
    console.log('exitVariableExpression');
};


TracingListener.prototype.enterInversionExpression = function(ctx) {
    console.log('enterInversionExpression');
};

TracingListener.prototype.exitInversionExpression = function(ctx) {
    console.log('exitInversionExpression');
};


exports.TracingListener = TracingListener;
