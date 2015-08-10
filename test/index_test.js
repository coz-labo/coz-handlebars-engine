"use strict";

var index = require('../lib/index');
exports['Eval properties.'] = function(test){
    test.ok(index);
    test.ok(index.helpers);
    test.ok(index.handlebars);
    test.done();
};