/**
 * Engine for handlebars.
 * @memberof module:coz-handlebars-engine
 * @inner
 * @augments CozEngine
 * @constructor Engine
 * @param {object} [options] - Optional settings.
 * @param {object} [options.helpers] - Handlebars helper functions.
 * @see http://handlebarsjs.com/
 */

"use strict";

const helpers = require('./helpers'),
    cozEngine = require('coz-engine'),
    compiling = require('./compiling');

/** @lends Engine */
module.exports = cozEngine(
    /** @lends Engine.prototype */
    {
        /**
         * @constructs
         */
        init: function (options) {
            let s = this;
            options = options || {};
            s.registerHelpers(helpers);
            s.registerHelpers(options.helpers);
        },
        /**
         * @inheritdoc
         * @implements CozEngine.prototype.precompile
         */
        precompile: function (source, callback) {
            let s = this;
            s._tryAsync(function () {
                return compiling.precompileHandlebars(source, {
                    helpers: s.helpers
                });
            }, callback);
        },
        /**
         * @inheritdoc
         * @implements CozEngine.prototype.compile
         */
        compile: function (source, callback) {
            let s = this;
            s._tryAsync(function () {
                return compiling.compileHandlebars(source, {
                    helpers: s.helpers
                });
            }, callback);
        },
        /**
         * Helper functions.
         * @type {object}
         */
        helpers: undefined,
        /**
         * Register a helper.
         * @param {string} name - Name of the helper.
         * @param {function} helper - Helper function.
         * @returns {HandlebarsEngine} - Returns self.
         */
        registerHelper: function (name, helper) {
            let s = this;
            s.helpers = s.helpers || {};
            s.helpers[name] = helper;
            return s;
        },
        /**
         * Register multiple helpers.
         * @param {object} helpers - Helpers to register.
         * @returns {HandlebarsEngine} - Returns self.
         */
        registerHelpers: function (helpers) {
           let s = this,
                names = Object.keys(helpers || {});
            for (let i = 0, len = names.length; i < len; i++) {
                let name = names[i];
                s.registerHelper(name, helpers[name]);
            }
            return s;
        },
        _tryAsync: function (task, callback) {
            let s = this;
            let result;
            try {
                result = task.call(s);
            } catch (e) {
                callback(e);
                return;
            }
            callback(null, result);
        }
    });


/**
 * @external CozEngine
 */