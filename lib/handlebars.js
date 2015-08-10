/**
 * Handlebars with coz buildin helpers.
 * @module coz-handlebars-engine/lib/handlebars
 */

"use strict";

var createHandlebars = require('./compiling/create_handlebars'),
    helpers = require('./helpers');

function create() {
    return createHandlebars(helpers);
}

var handlebars = create();
handlebars.create = create;

module.exports = handlebars;