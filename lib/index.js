/**
 * coz rendering engine with handlebars.
 * @module coz-handlebars-engine
 */

"use strict";

const Engine = require('./engine'),
    create = require('./create'),
    pkg = require('../package.json');

let lib = create.bind(this);
lib.create = create;
lib.Engine = Engine;
lib.helpers = require('./helpers');
lib.handlebars = require('./handlebars');
lib.version = pkg.version;

module.exports = lib;
