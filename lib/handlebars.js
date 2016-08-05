/**
 * Handlebars with coz buildin helpers.
 * @module handlebars
 */

'use strict'

const createHandlebars = require('./compiling/create_handlebars')
const helpers = require('./helpers')

function create () {
  return createHandlebars(helpers)
}

let handlebars = create()
handlebars.create = create

module.exports = handlebars
