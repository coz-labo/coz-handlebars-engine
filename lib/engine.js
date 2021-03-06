/**
 * Engine for handlebars.
 * @inner
 * @augments CozEngine
 * @constructor Engine
 * @param {object} [options] - Optional settings.
 * @param {object} [options.helpers] - Handlebars helper functions.
 * @see http://handlebarsjs.com/
 */

'use strict'

const helpers = require('./helpers')
const cozEngine = require('coz-engine')
const compiling = require('./compiling')

/** @lends Engine */
module.exports = cozEngine(
  /** @lends Engine.prototype */
  {
    /**
     * @constructs
     */
    init (options = {}) {
      const s = this
      s.registerHelpers(helpers)
      s.registerHelpers(options.helpers)
    },
    /**
     * @inheritdoc
     * @implements CozEngine.prototype.precompile
     */
    precompile (source, callback) {
      const s = this
      s._tryAsync(() => {
        return compiling.precompileHandlebars(source, {
          helpers: s.helpers
        })
      }, callback)
    },
    /**
     * @inheritdoc
     * @implements CozEngine.prototype.compile
     */
    compile (source, callback) {
      const s = this
      s._tryAsync(() => {
        return compiling.compileHandlebars(source, {
          helpers: s.helpers
        })
      }, callback)
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
    registerHelper (name, helper) {
      const s = this
      s.helpers = s.helpers || {}
      s.helpers[ name ] = helper
      return s
    },
    /**
     * Register multiple helpers.
     * @param {object} helpers - Helpers to register.
     * @returns {HandlebarsEngine} - Returns self.
     */
    registerHelpers (helpers) {
      let s = this
      let names = Object.keys(helpers || {})
      for (let i = 0, len = names.length; i < len; i++) {
        let name = names[ i ]
        s.registerHelper(name, helpers[ name ])
      }
      return s
    },
    _tryAsync (task, callback) {
      const s = this
      let result
      try {
        result = task.call(s)
      } catch (e) {
        callback(e)
        return
      }
      callback(null, result)
    }
  })

/**
 * @external CozEngine
 */
