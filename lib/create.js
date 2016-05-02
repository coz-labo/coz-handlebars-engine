/**
 * Create an engine.
 * @memberof module:coz-handlebars-engine/lib
 * @function create
 * @returns {Engine} - An engine instance.
 */

'use strict'

const Engine = require('./engine')

/** @lends create */
function create (config) {
  return new Engine(config)
}

module.exports = create;
