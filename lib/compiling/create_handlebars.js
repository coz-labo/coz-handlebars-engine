/***
 * Create a new handlebars.
 * @function createHandlebars
 * @param {object} helpers - Handlebars helpers.
 * @returns {Handlebars} - handlebars context.
 * @private
 */

"use strict";

var handlebars = require('handlebars');

/** @lends createHandlebars */
function createHandlebars(helpers) {
    var Handlebars = handlebars.create();
    if (helpers) {
        Object.keys(helpers).forEach(function (name) {
            var helper = helpers[name];
            Handlebars.registerHelper(name, helper);
        });
    }
    return Handlebars;
}

module.exports = createHandlebars;