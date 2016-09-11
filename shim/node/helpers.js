/**
 * Helper for handlebars engine.
 * @namespace handlebarsHelpers
 * @see http://handlebarsjs.com/
 */

'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var path = require('path');
var stringcase = require('stringcase');

// Find basedir from $$bud in Handlebars context.
function _basedirWithContext(ctx) {
  var data = ctx && ctx.data;
  var $$bud = data && data.root && data.root['$$bud'] || {};
  return $$bud.cwd || process.cwd();
}

/** @lends handlebarsHelpers */
module.exports = {
  /**
   * Get base name for a path.
   * @param {string} value - Pathname.
   * @returns {string} - Basename of given path.
   */
  basename: function basename(value) {
    return path.basename(String(value));
  },

  /**
   * Wrap string with braces.
   * @param {string} value - Value to wrap with braces.
   * @returns {string} - Wrapped string.
   */
  braces: function braces(value) {
    return '{' + value + '}';
  },

  /**
   * Convert into camel case string.
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  camelcase: function camelcase(value) {
    return stringcase.camelcase(value);
  },

  /**
   * Get directory name for a path.
   * @param {string} value - Pathname.
   * @returns {string} - Directory name of given path.
   */
  dirname: function dirname(value) {
    return path.dirname(value);
  },

  /**
   * Get extension name for a path.
   * @param {string} value - Pathname.
   * @returns {string} - Extension name of given path.
   */
  extname: function extname(value) {
    return path.extname(value);
  },

  /**
   * Eval a script.
   * @param {string} script - Script to eval.
   * @returns {?string} - Eval result.
   */
  eval: function _eval(script) {
    return function () {
      try {
        // noinspection Eslint
        return String(eval(script));
      } catch (e) {
        console.warn('Failed to eval script:', script);
        return null;
      }
    }();
  },

  /**
   * Convert to json string.
   * @param {object} data - Data to convert
   * @returns {string} - JSON string.
   */
  json: function json(data) {
    try {
      return (0, _stringify2.default)(data);
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
  numeric: function numeric(value) {
    return value && String(value).replace(/[^\d\.,]/g, '') || '';
  },

  /**
   * Read a file content.
   * @param {string} value - Path name of the file to read.
   * @returns {string} - File content string.
   */
  read: function read(value) {
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
  render: function render(value) {
    var ctx = arguments[arguments.length - 1];
    var data = ctx && ctx.data.root;
    var tmpl = module.exports.read(value);
    var handlebars = require('./handlebars');
    return handlebars.compile(tmpl)(data);
  },

  /**
   * Convert into lower case string.
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  lowercase: function lowercase(value) {
    return stringcase.lowercase(value);
  },

  /**
   * Convert into constant case string.
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  constcase: function constcase(value) {
    return stringcase.constcase(value);
  },

  /**
   * Convert into snake case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  snakecase: function snakecase(value) {
    return stringcase.snakecase(value);
  },

  /**
   * Convert into pascal case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  pascalcase: function pascalcase(value) {
    return stringcase.pascalcase(value);
  },

  /**
   * Convert into sentence case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  sentencecase: function sentencecase(value) {
    return stringcase.sentencecase(value);
  },

  /**
   * Convert into path case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  pathcase: function pathcase(value) {
    return stringcase.pathcase(value);
  },

  /**
   * Convert into spinal case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  spinalcase: function spinalcase(value) {
    return stringcase.spinalcase(value);
  },

  /**
   * Convert into enum case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  enumcase: function enumcase(value) {
    return stringcase.enumcase(value);
  },

  /**
   * Convert into title case string
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  titlecase: function titlecase(value) {
    return stringcase.titlecase(value);
  },

  /**
   * Convert into upper case string.
   * @param {string} value - String value to convert.
   * @returns {string} - Converted string.
   */
  uppercase: function uppercase(value) {
    return stringcase.uppercase(value);
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicGF0aCIsInN0cmluZ2Nhc2UiLCJfYmFzZWRpcldpdGhDb250ZXh0IiwiY3R4IiwiZGF0YSIsIiQkYnVkIiwicm9vdCIsImN3ZCIsInByb2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiYmFzZW5hbWUiLCJ2YWx1ZSIsIlN0cmluZyIsImJyYWNlcyIsImNhbWVsY2FzZSIsImRpcm5hbWUiLCJleHRuYW1lIiwiZXZhbCIsInNjcmlwdCIsImUiLCJjb25zb2xlIiwid2FybiIsImpzb24iLCJudW1lcmljIiwicmVwbGFjZSIsInJlYWQiLCJiYXNlZGlyIiwiYXJndW1lbnRzIiwiZmlsZW5hbWUiLCJyZXNvbHZlIiwiZXhpc3RzIiwiZXhpc3RzU3luYyIsInJlYWRGaWxlU3luYyIsInJlbmRlciIsImxlbmd0aCIsInRtcGwiLCJoYW5kbGViYXJzIiwiY29tcGlsZSIsImxvd2VyY2FzZSIsImNvbnN0Y2FzZSIsInNuYWtlY2FzZSIsInBhc2NhbGNhc2UiLCJzZW50ZW5jZWNhc2UiLCJwYXRoY2FzZSIsInNwaW5hbGNhc2UiLCJlbnVtY2FzZSIsInRpdGxlY2FzZSIsInVwcGVyY2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BOzs7Ozs7OztBQUVBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUSxNQUFSLENBQWI7QUFDQSxJQUFNRSxhQUFhRixRQUFRLFlBQVIsQ0FBbkI7O0FBRUE7QUFDQSxTQUFTRyxtQkFBVCxDQUE4QkMsR0FBOUIsRUFBbUM7QUFDakMsTUFBSUMsT0FBT0QsT0FBT0EsSUFBSUMsSUFBdEI7QUFDQSxNQUFJQyxRQUFRRCxRQUFRQSxLQUFLRSxJQUFiLElBQXFCRixLQUFLRSxJQUFMLENBQVcsT0FBWCxDQUFyQixJQUE2QyxFQUF6RDtBQUNBLFNBQU9ELE1BQU1FLEdBQU4sSUFBYUMsUUFBUUQsR0FBUixFQUFwQjtBQUNEOztB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Yzs7QUF3SGY7Ozs7O0FBS0E2QixXQTdIZSxxQkE2SEo3QixLQTdISSxFQTZIRztBQUNoQixXQUFPWCxXQUFXd0MsU0FBWCxDQUFxQjdCLEtBQXJCLENBQVA7QUFDRCxHQS9IYzs7QUFnSWY7Ozs7O0FBS0E4QixZQXJJZSxzQkFxSUg5QixLQXJJRyxFQXFJSTtBQUNqQixXQUFPWCxXQUFXeUMsVUFBWCxDQUFzQjlCLEtBQXRCLENBQVA7QUFDRCxHQXZJYzs7QUF3SWY7Ozs7O0FBS0ErQixjQTdJZSx3QkE2SUQvQixLQTdJQyxFQTZJTTtBQUNuQixXQUFPWCxXQUFXMEMsWUFBWCxDQUF3Qi9CLEtBQXhCLENBQVA7QUFDRCxHQS9JYzs7QUFnSmY7Ozs7O0FBS0FnQyxVQXJKZSxvQkFxSkxoQyxLQXJKSyxFQXFKRTtBQUNmLFdBQU9YLFdBQVcyQyxRQUFYLENBQW9CaEMsS0FBcEIsQ0FBUDtBQUNELEdBdkpjOztBQXdKZjs7Ozs7QUFLQWlDLFlBN0plLHNCQTZKSGpDLEtBN0pHLEVBNkpJO0FBQ2pCLFdBQU9YLFdBQVc0QyxVQUFYLENBQXNCakMsS0FBdEIsQ0FBUDtBQUNELEdBL0pjOztBQWdLZjs7Ozs7QUFLQWtDLFVBcktlLG9CQXFLTGxDLEtBcktLLEVBcUtFO0FBQ2YsV0FBT1gsV0FBVzZDLFFBQVgsQ0FBb0JsQyxLQUFwQixDQUFQO0FBQ0QsR0F2S2M7O0FBd0tmOzs7OztBQUtBbUMsV0E3S2UscUJBNktKbkMsS0E3S0ksRUE2S0c7QUFDaEIsV0FBT1gsV0FBVzhDLFNBQVgsQ0FBcUJuQyxLQUFyQixDQUFQO0FBQ0QsR0EvS2M7O0FBZ0xmOzs7OztBQUtBb0MsV0FyTGUscUJBcUxKcEMsS0FyTEksRUFxTEc7QUFDaEIsV0FBT1gsV0FBVytDLFNBQVgsQ0FBcUJwQyxLQUFyQixDQUFQO0FBQ0Q7QUF2TGMsQ0FBakIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhlbHBlciBmb3IgaGFuZGxlYmFycyBlbmdpbmUuXG4gKiBAbmFtZXNwYWNlIGhhbmRsZWJhcnNIZWxwZXJzXG4gKiBAc2VlIGh0dHA6Ly9oYW5kbGViYXJzanMuY29tL1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IHN0cmluZ2Nhc2UgPSByZXF1aXJlKCdzdHJpbmdjYXNlJylcblxuLy8gRmluZCBiYXNlZGlyIGZyb20gJCRidWQgaW4gSGFuZGxlYmFycyBjb250ZXh0LlxuZnVuY3Rpb24gX2Jhc2VkaXJXaXRoQ29udGV4dCAoY3R4KSB7XG4gIGxldCBkYXRhID0gY3R4ICYmIGN0eC5kYXRhXG4gIGxldCAkJGJ1ZCA9IGRhdGEgJiYgZGF0YS5yb290ICYmIGRhdGEucm9vdFsgJyQkYnVkJyBdIHx8IHt9XG4gIHJldHVybiAkJGJ1ZC5jd2QgfHwgcHJvY2Vzcy5jd2QoKVxufVxuXG4vKiogQGxlbmRzIGhhbmRsZWJhcnNIZWxwZXJzICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLyoqXG4gICAqIEdldCBiYXNlIG5hbWUgZm9yIGEgcGF0aC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gUGF0aG5hbWUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQmFzZW5hbWUgb2YgZ2l2ZW4gcGF0aC5cbiAgICovXG4gIGJhc2VuYW1lICh2YWx1ZSkge1xuICAgIHJldHVybiBwYXRoLmJhc2VuYW1lKFN0cmluZyh2YWx1ZSkpXG4gIH0sXG4gIC8qKlxuICAgKiBXcmFwIHN0cmluZyB3aXRoIGJyYWNlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVmFsdWUgdG8gd3JhcCB3aXRoIGJyYWNlcy5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBXcmFwcGVkIHN0cmluZy5cbiAgICovXG4gIGJyYWNlcyAodmFsdWUpIHtcbiAgICByZXR1cm4gJ3snICsgdmFsdWUgKyAnfSdcbiAgfSxcbiAgLyoqXG4gICAqIENvbnZlcnQgaW50byBjYW1lbCBjYXNlIHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gU3RyaW5nIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udmVydGVkIHN0cmluZy5cbiAgICovXG4gIGNhbWVsY2FzZSAodmFsdWUpIHtcbiAgICByZXR1cm4gc3RyaW5nY2FzZS5jYW1lbGNhc2UodmFsdWUpXG4gIH0sXG4gIC8qKlxuICAgKiBHZXQgZGlyZWN0b3J5IG5hbWUgZm9yIGEgcGF0aC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gUGF0aG5hbWUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRGlyZWN0b3J5IG5hbWUgb2YgZ2l2ZW4gcGF0aC5cbiAgICovXG4gIGRpcm5hbWUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhdGguZGlybmFtZSh2YWx1ZSlcbiAgfSxcbiAgLyoqXG4gICAqIEdldCBleHRlbnNpb24gbmFtZSBmb3IgYSBwYXRoLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBQYXRobmFtZS5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBFeHRlbnNpb24gbmFtZSBvZiBnaXZlbiBwYXRoLlxuICAgKi9cbiAgZXh0bmFtZSAodmFsdWUpIHtcbiAgICByZXR1cm4gcGF0aC5leHRuYW1lKHZhbHVlKVxuICB9LFxuICAvKipcbiAgICogRXZhbCBhIHNjcmlwdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjcmlwdCAtIFNjcmlwdCB0byBldmFsLlxuICAgKiBAcmV0dXJucyB7P3N0cmluZ30gLSBFdmFsIHJlc3VsdC5cbiAgICovXG4gIGV2YWwgKHNjcmlwdCkge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEVzbGludFxuICAgICAgICByZXR1cm4gU3RyaW5nKGV2YWwoc2NyaXB0KSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gZXZhbCBzY3JpcHQ6Jywgc2NyaXB0KVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH0pKClcbiAgfSxcbiAgLyoqXG4gICAqIENvbnZlcnQgdG8ganNvbiBzdHJpbmcuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gRGF0YSB0byBjb252ZXJ0XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gSlNPTiBzdHJpbmcuXG4gICAqL1xuICBqc29uIChkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuICB9LFxuICAvKipcbiAgICogUmVwbGFjZSBzdHJpbmcgaW50byBudW1lcmljLlxuICAgKiBPbmx5IG51bWJlciBvciBcIi5cIiBvciBcIixcIiB3aWxsIGJlIHJlbWFpbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gU3RyaW5nLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIE51bWVyaWMgc3RyaW5nLlxuICAgKi9cbiAgbnVtZXJpYyAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9bXlxcZFxcLixdL2csICcnKSB8fCAnJztcbiAgfSxcbiAgLyoqXG4gICAqIFJlYWQgYSBmaWxlIGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFBhdGggbmFtZSBvZiB0aGUgZmlsZSB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIEZpbGUgY29udGVudCBzdHJpbmcuXG4gICAqL1xuICByZWFkICh2YWx1ZSkge1xuICAgIGxldCBiYXNlZGlyID0gX2Jhc2VkaXJXaXRoQ29udGV4dChhcmd1bWVudHNbIDEgXSlcbiAgICBsZXQgZmlsZW5hbWUgPSBwYXRoLnJlc29sdmUoYmFzZWRpciwgdmFsdWUpXG4gICAgbGV0IGV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZmlsZW5hbWUpXG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgcmV0dXJuIFN0cmluZyhmcy5yZWFkRmlsZVN5bmMoZmlsZW5hbWUpKVxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfSxcbiAgLyoqXG4gICAqIFJlbmRlciBmaWxlIGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFBhdGggbmFtZSBvZiB0aGUgZmlsZSB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIEZpbGUgY29udGVudCBzdHJpbmcuXG4gICAqL1xuICByZW5kZXIgKHZhbHVlKSB7XG4gICAgbGV0IGN0eCA9IGFyZ3VtZW50c1sgYXJndW1lbnRzLmxlbmd0aCAtIDEgXVxuICAgIGxldCBkYXRhID0gY3R4ICYmIGN0eC5kYXRhLnJvb3RcbiAgICBsZXQgdG1wbCA9IG1vZHVsZS5leHBvcnRzLnJlYWQodmFsdWUpXG4gICAgbGV0IGhhbmRsZWJhcnMgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMnKVxuICAgIHJldHVybiBoYW5kbGViYXJzLmNvbXBpbGUodG1wbCkoZGF0YSlcbiAgfSxcbiAgLyoqXG4gICAqIENvbnZlcnQgaW50byBsb3dlciBjYXNlIHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gU3RyaW5nIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udmVydGVkIHN0cmluZy5cbiAgICovXG4gIGxvd2VyY2FzZSAodmFsdWUpIHtcbiAgICByZXR1cm4gc3RyaW5nY2FzZS5sb3dlcmNhc2UodmFsdWUpXG4gIH0sXG4gIC8qKlxuICAgKiBDb252ZXJ0IGludG8gY29uc3RhbnQgY2FzZSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFN0cmluZyB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnZlcnRlZCBzdHJpbmcuXG4gICAqL1xuICBjb25zdGNhc2UgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cmluZ2Nhc2UuY29uc3RjYXNlKHZhbHVlKVxuICB9LFxuICAvKipcbiAgICogQ29udmVydCBpbnRvIHNuYWtlIGNhc2Ugc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFN0cmluZyB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnZlcnRlZCBzdHJpbmcuXG4gICAqL1xuICBzbmFrZWNhc2UgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cmluZ2Nhc2Uuc25ha2VjYXNlKHZhbHVlKVxuICB9LFxuICAvKipcbiAgICogQ29udmVydCBpbnRvIHBhc2NhbCBjYXNlIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBTdHJpbmcgdmFsdWUgdG8gY29udmVydC5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBDb252ZXJ0ZWQgc3RyaW5nLlxuICAgKi9cbiAgcGFzY2FsY2FzZSAodmFsdWUpIHtcbiAgICByZXR1cm4gc3RyaW5nY2FzZS5wYXNjYWxjYXNlKHZhbHVlKVxuICB9LFxuICAvKipcbiAgICogQ29udmVydCBpbnRvIHNlbnRlbmNlIGNhc2Ugc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFN0cmluZyB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnZlcnRlZCBzdHJpbmcuXG4gICAqL1xuICBzZW50ZW5jZWNhc2UgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cmluZ2Nhc2Uuc2VudGVuY2VjYXNlKHZhbHVlKVxuICB9LFxuICAvKipcbiAgICogQ29udmVydCBpbnRvIHBhdGggY2FzZSBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gU3RyaW5nIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udmVydGVkIHN0cmluZy5cbiAgICovXG4gIHBhdGhjYXNlICh2YWx1ZSkge1xuICAgIHJldHVybiBzdHJpbmdjYXNlLnBhdGhjYXNlKHZhbHVlKVxuICB9LFxuICAvKipcbiAgICogQ29udmVydCBpbnRvIHNwaW5hbCBjYXNlIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBTdHJpbmcgdmFsdWUgdG8gY29udmVydC5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBDb252ZXJ0ZWQgc3RyaW5nLlxuICAgKi9cbiAgc3BpbmFsY2FzZSAodmFsdWUpIHtcbiAgICByZXR1cm4gc3RyaW5nY2FzZS5zcGluYWxjYXNlKHZhbHVlKVxuICB9LFxuICAvKipcbiAgICogQ29udmVydCBpbnRvIGVudW0gY2FzZSBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gU3RyaW5nIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udmVydGVkIHN0cmluZy5cbiAgICovXG4gIGVudW1jYXNlICh2YWx1ZSkge1xuICAgIHJldHVybiBzdHJpbmdjYXNlLmVudW1jYXNlKHZhbHVlKVxuICB9LFxuICAvKipcbiAgICogQ29udmVydCBpbnRvIHRpdGxlIGNhc2Ugc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFN0cmluZyB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnZlcnRlZCBzdHJpbmcuXG4gICAqL1xuICB0aXRsZWNhc2UgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cmluZ2Nhc2UudGl0bGVjYXNlKHZhbHVlKVxuICB9LFxuICAvKipcbiAgICogQ29udmVydCBpbnRvIHVwcGVyIGNhc2Ugc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBTdHJpbmcgdmFsdWUgdG8gY29udmVydC5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBDb252ZXJ0ZWQgc3RyaW5nLlxuICAgKi9cbiAgdXBwZXJjYXNlICh2YWx1ZSkge1xuICAgIHJldHVybiBzdHJpbmdjYXNlLnVwcGVyY2FzZSh2YWx1ZSlcbiAgfVxufVxuIl19