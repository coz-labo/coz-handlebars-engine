/**
 * Test case for createHandlebars.
 * Runs with nodeunit.
 */

var createHandlebars = require('../lib/compiling/create_handlebars.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Create handlebars'] = function (test) {
    test.ok(createHandlebars({}));
    test.done();
};

