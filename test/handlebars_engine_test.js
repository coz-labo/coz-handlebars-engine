/**
 * Test case for CozHandlebarsEngine
 * Runs with nodeunit.
 */

"use strict";

var HandlebarsEngine = require('../lib/engine.js'),
    childProcess = require('child_process');


exports['Construct a engine.'] = function (test) {
    var engine = new HandlebarsEngine({});
    engine.set('foo', 'baz');
    test.equal(engine.foo, 'baz');
    engine.set({'foo': 'quz'});
    test.equal(engine.foo, 'quz');
    test.equal(engine.get('foo'), 'quz');
    test.equal(engine.clone().foo, 'quz');
    test.done();
};

exports['Register helpers.'] = function (test) {
    var helper01 = function () {
    };
    var engine = new HandlebarsEngine({
        helpers: {
            foo: helper01
        }
    });
    engine.registerHelper('bar', helper01);
    engine.registerHelpers({baz: helper01});
    test.ok(engine.helpers);
    test.ok(engine.helpers.foo);
    test.ok(engine.helpers.bar);
    test.ok(engine.helpers.baz);
    test.done();
};

exports['Precompile template.'] = function (test) {
    new HandlebarsEngine().precompile('{{name}}', function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Compile template.'] = function (test) {
    var engine = new HandlebarsEngine({});
    engine.compile('Here are {{lowercase name}}.', function (err, tmpl) {
        test.ifError(err);
        test.ok(tmpl);
        test.equal(tmpl({name: 'Red Apples'}), 'Here are red apples.');
        test.done();
    });
};


exports['Handle async error.'] = function (test) {
    new HandlebarsEngine()._tryAsync(function () {
        throw new Error('foo');
    }, function (err) {
        test.ok(!!err);
        test.done();
    })
};


