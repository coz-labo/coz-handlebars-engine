/**
 * Compile handlebars template string.
 * @memberof module:coz/lib/util/compiling
 * @function compileHandlebars
 * @param {string} source - Template source string.
 * @param {object} options - Optional settings.
 * @param {object} [options.helpers] - Handlebars helper functions to register.
 * @returns {function} Handlebars template function.
 * @example
 *     var tmpl = compileHandlebars('Here are {{toLowercase name}}.', {
 *          helpers: {
 *              toLowercase: function(str){ return str.toLowerCase(); }
 *          }
 *     });
 *     console.log(tmpl({name: 'Red Apples'}));
 *          // -> Here are red apples.
 * @see http://handlebarsjs.com/
 */

"use strict";

const createHandlebars = require('./create_handlebars');

/** @lends compileHandlebars */
function compileHandlebars(source, options) {
    if (!source) {
        return null;
    }
    options = options || {};
    let Handlebars = createHandlebars(options.helpers);
    return Handlebars.compile(String(source));
}

module.exports = compileHandlebars;