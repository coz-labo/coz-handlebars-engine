/***
 * Create a new handlebars.
 * @function createHandlebars
 * @param {object} helpers - Handlebars helpers.
 * @returns {Handlebars} - handlebars context.
 * @private
 */

'use strict'

const handlebars = require('handlebars')

/** @lends createHandlebars */
function createHandlebars (helpers) {
  let Handlebars = handlebars.create()
  if (helpers) {
    Object.keys(helpers).forEach((name) => {
      let helper = helpers[ name ]
      Handlebars.registerHelper(name, helper)
    })
  }
  return Handlebars;
}

module.exports = createHandlebars