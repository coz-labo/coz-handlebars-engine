/**
 * Helper for handlebars engine.
 * @namespace handlebarsHelpers
 * @see http://handlebarsjs.com/
 */

'use strict'

const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')
const stringcase = require('stringcase')

// Find basedir from $$bud in Handlebars context.
function _basedirWithContext (ctx) {
  let data = ctx && ctx.data
  let $$bud = data && data.root && data.root[ '$$bud' ] || {}
  return $$bud.cwd || process.cwd()
}

/** @lends handlebarsHelpers */
module.exports = {
  /**
   * Get base name for a path.
   * @param {string} value - Pathname.
   * @returns {string} - Basename of given path.
   */
  basename (value) {
    return path.basename(String(value))
  },
  /**
   * Wrap string with braces.
   * @param {string} value - Value to wrap with braces.
   * @returns {string} - Wrapped string.
   */
  braces (value) {
    return '{' + value + '}'
  },
  /**
   * Convert into camel case string.
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  camelcase (value) {
    return stringcase.camelcase(value)
  },
  /**
   * Get directory name for a path.
   * @param {string} value - Pathname.
   * @returns {string} - Directory name of given path.
   */
  dirname (value) {
    return path.dirname(value)
  },
  /**
   * Get extension name for a path.
   * @param {string} value - Pathname.
   * @returns {string} - Extension name of given path.
   */
  extname (value) {
    return path.extname(value)
  },
  /**
   * Eval a script.
   * @param {string} script - Script to eval.
   * @returns {?string} - Eval result.
   */
  eval (script) {
    try {
      // noinspection Eslint
      return String(eval(script))
    } catch (e) {
      console.warn('Failed to eval script:', script)
      return null
    }
  },
  /**
   * Convert to json string.
   * @param {object} data - Data to convert
   * @returns {string} - JSON string.
   */
  json (data) {
    try {
      return JSON.stringify(data)
    } catch (e) {
      return data
    }
  },
  /**
   * Replace string into numeric.
   * Only number or "." or "," will be remain.
   * @param {string} value - String.
   * @returns {string} - Numeric string.
   */
  numeric (value) {
    return value && String(value).replace(/[^\d\.,]/g, '') || '';
  },
  /**
   * Read a file content.
   * @param {string} value - Path name of the file to read.
   * @returns {string} - File content string.
   */
  read (value) {
    let basedir = _basedirWithContext(arguments[ 1 ])
    let filename = path.resolve(basedir, value)
    let exists = fs.existsSync(filename)
    if (exists) {
      return String(fs.readFileSync(filename))
    }
    return ''
  },
  /**
   * Render file content.
   * @param {string} value - Path name of the file to read.
   * @returns {string} - File content string.
   */
  render (value) {
    let ctx = arguments[ arguments.length - 1 ]
    let data = ctx && ctx.data.root
    let tmpl = module.exports.read(value)
    let handlebars = require('./handlebars')
    return handlebars.compile(tmpl)(data)
  },
  /**
   * Convert into lower case string.
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  lowercase (value) {
    return stringcase.lowercase(value)
  },
  /**
   * Convert into constant case string.
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  constcase (value) {
    return stringcase.constcase(value)
  },
  /**
   * Convert into snake case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  snakecase (value) {
    return stringcase.snakecase(value)
  },
  /**
   * Convert into pascal case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  pascalcase (value) {
    return stringcase.pascalcase(value)
  },
  /**
   * Convert into sentence case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  sentencecase (value) {
    return stringcase.sentencecase(value)
  },
  /**
   * Convert into path case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  pathcase (value) {
    return stringcase.pathcase(value)
  },
  /**
   * Convert into spinal case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  spinalcase (value) {
    return stringcase.spinalcase(value)
  },
  /**
   * Convert into enum case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  enumcase (value) {
    return stringcase.enumcase(value)
  },
  /**
   * Convert into title case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  titlecase (value) {
    return stringcase.titlecase(value)
  },
  /**
   * Convert into upper case string.
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  uppercase (value) {
    return stringcase.uppercase(value)
  }
}
