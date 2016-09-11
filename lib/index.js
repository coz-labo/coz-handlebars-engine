/**
 * coz rendering engine with handlebars.
 * @module coz-handlebars-engine
 */

'use strict'

const Engine = require('./engine')
const create = require('./create')

let lib = create.bind(this)
lib.create = create
lib.Engine = Engine
lib.helpers = require('./helpers')
lib.handlebars = require('./handlebars')

module.exports = lib
