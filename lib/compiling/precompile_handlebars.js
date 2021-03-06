/**
 * Precompile handlebars template string.
 * @memberof module:coz/lib/util/compiling
 * @function precompileHandlebars
 * @param {string} source - Template source string.
 * @param {object} options - Optional settings.
 * @param {object} [options.helpers] - Handlebars helper functions to register.
 * @returns {function} Handlebars template function.
 * @example
 *     var tmpl = precompileHandlebars('Here are {{toLowercase name}}.', {
 *          helpers: {
 *              toLowercase: function(str){ return str.toLowerCase() }
 *          }
 *     })
 *     console.log(tmpl)
 *          // -> Template function string.
 * @see http://handlebarsjs.com/
 */

'use strict'

const createHandlebars = require('./create_handlebars')

/** @lends precompileHandlebars */
function precompileHandlebars (source, options) {
  if (!source) {
    return null
  }
  options = options || {}
  let Handlebars = createHandlebars(options.helpers)
  return 'Handlebars.template(' + Handlebars.precompile(String(source)) + ')'
}

module.exports = precompileHandlebars
