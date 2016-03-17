/**
 * Handlebars with coz buildin helpers.
 * @module coz-handlebars-engine/lib/handlebars
 */

"use strict";

const createHandlebars = require('./compiling/create_handlebars'),
    helpers = require('./helpers');

function create() {
    return createHandlebars(helpers);
}

let handlebars = create();
handlebars.create = create;

module.exports = handlebars;