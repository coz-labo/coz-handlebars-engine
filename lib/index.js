/**
 * coz rendering engine with handlebars.
 * @module coz-handlebars-engine
 */

"use strict";

var Engine = require('./engine');


function create(config) {
    return new Engine(config);
}

create.helpers = require('./helpers');
create.handlebars = require('./handlebars');

module.exports = create;