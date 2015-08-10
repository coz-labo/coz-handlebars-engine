/**
 * Helper for handlebars engine.
 * @memberof module:coz-handlebars-engine/lib
 * @namespace handlebarsHelpers
 * @see http://handlebarsjs.com/
 */

"use strict";
var fs = require('fs'),
    path = require('path'),
    childProcess = require('child_process'),
    stringcase = require('stringcase');


//Find basedir from $$bud in Handlebars context.
function _basedirWithContext(ctx) {
    var data = ctx && ctx.data,
        $$bud = data && data.root && data.root['$$bud'] || {};
    return $$bud.cwd || process.cwd();
}


/** @lends module:coz/lib/template/buildin_helpers.handlebarsHelpers */
module.exports = {
    /**
     * Get base name for a path.
     * @param {string} value - Pathname.
     * @returns {string} - Basename of given path.
     */
    basename: function (value) {
        return path.basename(value);
    },
    /**
     * Wrap string with braces.
     * @param {string} value - Value to wrap with braces.
     * @returns {string} - Wrapped string.
     */
    braces: function (value) {
        return '{' + value + '}';
    },
    /**
     * Convert into camel case string.
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    camelcase: function (value) {
        return stringcase.camelcase(value);
    },
    /**
     * Get directory name for a path.
     * @param {string} value - Pathname.
     * @returns {string} - Directory name of given path.
     */
    dirname: function (value) {
        return path.dirname(value);
    },
    /**
     * Get extension name for a path.
     * @param {string} value - Pathname.
     * @returns {string} - Extension name of given path.
     */
    extname: function (value) {
        return path.extname(value);
    },
    /**
     * Eval a script.
     * @param {string} script - Script to eval.
     * @returns {string} - Eval result.
     */
    eval: function (script) {
        var hasExeSync = !!childProcess.execSync;
        if (hasExeSync) {
            return String(childProcess.execSync(script));
        } else {
            console.warn('childProcess.execSync is not supported.');
            return '';
        }
    },
    /**
     * Convert to json string.
     * @param {object} data - Data to convert
     * @returns {string} - JSON string.
     */
    json: function (data) {
        try {
            return JSON.stringify(data);
        } catch (e) {
            return data;
        }
    },
    /**
     * Replace string into numeric.
     * Only number or "." or "," will be remain.
     * @param {string} value - String.
     * @returns {string} - Numeric string.
     */
    numeric: function (value) {
        return value && String(value).replace(/[^\d\.,]/g, '') || '';
    },
    /**
     * Read a file content.
     * @param {string} value - Path name of the file to read.
     * @returns {string} - File content string.
     */
    read: function (value) {
        var basedir = _basedirWithContext(arguments[1]);
        var filename = path.resolve(basedir, value);
        var exists = fs.existsSync(filename);
        if (exists) {
            return String(fs.readFileSync(filename));
        }
        return '';
    },
    /**
     * Render file content.
     * @param {string} value - Path name of the file to read.
     * @returns {string} - File content string.
     */
    render: function (value) {
        var ctx = arguments[arguments.length - 1],
            data = ctx && ctx.data.root,
            tmpl = module.exports.read(value);
        var handlebars = require('./handlebars');
        return handlebars.compile(tmpl)(data);
    },
    /**
     * Convert into lower case string.
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    lowercase: function (value) {
        return stringcase.lowercase(value);
    },
    /**
     * Convert into snake case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    snakecase: function (value) {
        return stringcase.snakecase(value);
    },
    /**
     * Convert into pascal case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    pascalcase: function (value) {
        return stringcase.pascalcase(value);
    },
    /**
     * Convert into sentence case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    sentencecase: function (value) {
        return stringcase.sentencecase(value);
    },
    /**
     * Convert into path case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    pathcase: function (value) {
        return stringcase.pathcase(value);
    },
    /**
     * Convert into spinal case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    spinalcase: function (value) {
        return stringcase.spinalcase(value);
    },
    /**
     * Convert into title case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    titlecase: function (value) {
        return stringcase.titlecase(value);
    },
    /**
     * Convert into upper case string.
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    uppercase: function (value) {
        return stringcase.uppercase(value);
    }
};


