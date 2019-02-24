/**
 * Helper for handlebars engine.
 * @namespace handlebarsHelpers
 * @see http://handlebarsjs.com/
 */
'use strict';

var fs = require('fs');

var path = require('path');

var stringcase = require('stringcase'); // Find basedir from $$bud in Handlebars context.


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicGF0aCIsInN0cmluZ2Nhc2UiLCJfYmFzZWRpcldpdGhDb250ZXh0IiwiY3R4IiwiZGF0YSIsIiQkYnVkIiwicm9vdCIsImN3ZCIsInByb2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiYmFzZW5hbWUiLCJ2YWx1ZSIsIlN0cmluZyIsImJyYWNlcyIsImNhbWVsY2FzZSIsImRpcm5hbWUiLCJleHRuYW1lIiwiZXZhbCIsInNjcmlwdCIsImUiLCJjb25zb2xlIiwid2FybiIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwibnVtZXJpYyIsInJlcGxhY2UiLCJyZWFkIiwiYmFzZWRpciIsImFyZ3VtZW50cyIsImZpbGVuYW1lIiwicmVzb2x2ZSIsImV4aXN0cyIsImV4aXN0c1N5bmMiLCJyZWFkRmlsZVN5bmMiLCJyZW5kZXIiLCJsZW5ndGgiLCJ0bXBsIiwiaGFuZGxlYmFycyIsImNvbXBpbGUiLCJsb3dlcmNhc2UiLCJjb25zdGNhc2UiLCJzbmFrZWNhc2UiLCJwYXNjYWxjYXNlIiwic2VudGVuY2VjYXNlIiwicGF0aGNhc2UiLCJzcGluYWxjYXNlIiwiZW51bWNhc2UiLCJ0aXRsZWNhc2UiLCJ1cHBlcmNhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQU1BOztBQUVBLElBQU1BLEVBQUUsR0FBR0MsT0FBTyxDQUFDLElBQUQsQ0FBbEI7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxJQUFNRSxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxZQUFELENBQTFCLEMsQ0FFQTs7O0FBQ0EsU0FBU0csbUJBQVQsQ0FBOEJDLEdBQTlCLEVBQW1DO0FBQ2pDLE1BQUlDLElBQUksR0FBR0QsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQXRCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRCxJQUFJLElBQUlBLElBQUksQ0FBQ0UsSUFBYixJQUFxQkYsSUFBSSxDQUFDRSxJ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S0FBdEIsQ0FBUDtBQUNELEdBL0pjOztBQWdLZjs7Ozs7QUFLQW9DLEVBQUFBLFFBcktlLG9CQXFLTHBDLEtBcktLLEVBcUtFO0FBQ2YsV0FBT1gsVUFBVSxDQUFDK0MsUUFBWCxDQUFvQnBDLEtBQXBCLENBQVA7QUFDRCxHQXZLYzs7QUF3S2Y7Ozs7O0FBS0FxQyxFQUFBQSxTQTdLZSxxQkE2S0pyQyxLQTdLSSxFQTZLRztBQUNoQixXQUFPWCxVQUFVLENBQUNnRCxTQUFYLENBQXFCckMsS0FBckIsQ0FBUDtBQUNELEdBL0tjOztBQWdMZjs7Ozs7QUFLQXNDLEVBQUFBLFNBckxlLHFCQXFMSnRDLEtBckxJLEVBcUxHO0FBQ2hCLFdBQU9YLFVBQVUsQ0FBQ2lELFNBQVgsQ0FBcUJ0QyxLQUFyQixDQUFQO0FBQ0Q7QUF2TGMsQ0FBakIiLCJzb3VyY2VSb290IjoiLi4vLi4vbGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIZWxwZXIgZm9yIGhhbmRsZWJhcnMgZW5naW5lLlxuICogQG5hbWVzcGFjZSBoYW5kbGViYXJzSGVscGVyc1xuICogQHNlZSBodHRwOi8vaGFuZGxlYmFyc2pzLmNvbS9cbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBzdHJpbmdjYXNlID0gcmVxdWlyZSgnc3RyaW5nY2FzZScpXG5cbi8vIEZpbmQgYmFzZWRpciBmcm9tICQkYnVkIGluIEhhbmRsZWJhcnMgY29udGV4dC5cbmZ1bmN0aW9uIF9iYXNlZGlyV2l0aENvbnRleHQgKGN0eCkge1xuICBsZXQgZGF0YSA9IGN0eCAmJiBjdHguZGF0YVxuICBsZXQgJCRidWQgPSBkYXRhICYmIGRhdGEucm9vdCAmJiBkYXRhLnJvb3RbICckJGJ1ZCcgXSB8fCB7fVxuICByZXR1cm4gJCRidWQuY3dkIHx8IHByb2Nlc3MuY3dkKClcbn1cblxuLyoqIEBsZW5kcyBoYW5kbGViYXJzSGVscGVycyAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qKlxuICAgKiBHZXQgYmFzZSBuYW1lIGZvciBhIHBhdGguXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFBhdGhuYW1lLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIEJhc2VuYW1lIG9mIGdpdmVuIHBhdGguXG4gICAqL1xuICBiYXNlbmFtZSAodmFsdWUpIHtcbiAgICByZXR1cm4gcGF0aC5iYXNlbmFtZShTdHJpbmcodmFsdWUpKVxuICB9LFxuICAvKipcbiAgICogV3JhcCBzdHJpbmcgd2l0aCBicmFjZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFZhbHVlIHRvIHdyYXAgd2l0aCBicmFjZXMuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gV3JhcHBlZCBzdHJpbmcuXG4gICAqL1xuICBicmFjZXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICd7JyArIHZhbHVlICsgJ30nXG4gIH0sXG4gIC8qKlxuICAgKiBDb252ZXJ0IGludG8gY2FtZWwgY2FzZSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFN0cmluZyB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnZlcnRlZCBzdHJpbmcuXG4gICAqL1xuICBjYW1lbGNhc2UgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cmluZ2Nhc2UuY2FtZWxjYXNlKHZhbHVlKVxuICB9LFxuICAvKipcbiAgICogR2V0IGRpcmVjdG9yeSBuYW1lIGZvciBhIHBhdGguXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFBhdGhuYW1lLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIERpcmVjdG9yeSBuYW1lIG9mIGdpdmVuIHBhdGguXG4gICAqL1xuICBkaXJuYW1lICh2YWx1ZSkge1xuICAgIHJldHVybiBwYXRoLmRpcm5hbWUodmFsdWUpXG4gIH0sXG4gIC8qKlxuICAgKiBHZXQgZXh0ZW5zaW9uIG5hbWUgZm9yIGEgcGF0aC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gUGF0aG5hbWUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRXh0ZW5zaW9uIG5hbWUgb2YgZ2l2ZW4gcGF0aC5cbiAgICovXG4gIGV4dG5hbWUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhdGguZXh0bmFtZSh2YWx1ZSlcbiAgfSxcbiAgLyoqXG4gICAqIEV2YWwgYSBzY3JpcHQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY3JpcHQgLSBTY3JpcHQgdG8gZXZhbC5cbiAgICogQHJldHVybnMgez9zdHJpbmd9IC0gRXZhbCByZXN1bHQuXG4gICAqL1xuICBldmFsIChzY3JpcHQpIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBFc2xpbnRcbiAgICAgICAgcmV0dXJuIFN0cmluZyhldmFsKHNjcmlwdCkpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGV2YWwgc2NyaXB0OicsIHNjcmlwdClcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9KSgpXG4gIH0sXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRvIGpzb24gc3RyaW5nLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIERhdGEgdG8gY29udmVydFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIEpTT04gc3RyaW5nLlxuICAgKi9cbiAganNvbiAoZGF0YSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cbiAgfSxcbiAgLyoqXG4gICAqIFJlcGxhY2Ugc3RyaW5nIGludG8gbnVtZXJpYy5cbiAgICogT25seSBudW1iZXIgb3IgXCIuXCIgb3IgXCIsXCIgd2lsbCBiZSByZW1haW4uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFN0cmluZy5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBOdW1lcmljIHN0cmluZy5cbiAgICovXG4gIG51bWVyaWMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvW15cXGRcXC4sXS9nLCAnJykgfHwgJyc7XG4gIH0sXG4gIC8qKlxuICAgKiBSZWFkIGEgZmlsZSBjb250ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBQYXRoIG5hbWUgb2YgdGhlIGZpbGUgdG8gcmVhZC5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBGaWxlIGNvbnRlbnQgc3RyaW5nLlxuICAgKi9cbiAgcmVhZCAodmFsdWUpIHtcbiAgICBsZXQgYmFzZWRpciA9IF9iYXNlZGlyV2l0aENvbnRleHQoYXJndW1lbnRzWyAxIF0pXG4gICAgbGV0IGZpbGVuYW1lID0gcGF0aC5yZXNvbHZlKGJhc2VkaXIsIHZhbHVlKVxuICAgIGxldCBleGlzdHMgPSBmcy5leGlzdHNTeW5jKGZpbGVuYW1lKVxuICAgIGlmIChleGlzdHMpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoZnMucmVhZEZpbGVTeW5jKGZpbGVuYW1lKSlcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH0sXG4gIC8qKlxuICAgKiBSZW5kZXIgZmlsZSBjb250ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBQYXRoIG5hbWUgb2YgdGhlIGZpbGUgdG8gcmVhZC5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBGaWxlIGNvbnRlbnQgc3RyaW5nLlxuICAgKi9cbiAgcmVuZGVyICh2YWx1ZSkge1xuICAgIGxldCBjdHggPSBhcmd1bWVudHNbIGFyZ3VtZW50cy5sZW5ndGggLSAxIF1cbiAgICBsZXQgZGF0YSA9IGN0eCAmJiBjdHguZGF0YS5yb290XG4gICAgbGV0IHRtcGwgPSBtb2R1bGUuZXhwb3J0cy5yZWFkKHZhbHVlKVxuICAgIGxldCBoYW5kbGViYXJzID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzJylcbiAgICByZXR1cm4gaGFuZGxlYmFycy5jb21waWxlKHRtcGwpKGRhdGEpXG4gIH0sXG4gIC8qKlxuICAgKiBDb252ZXJ0IGludG8gbG93ZXIgY2FzZSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFN0cmluZyB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnZlcnRlZCBzdHJpbmcuXG4gICAqL1xuICBsb3dlcmNhc2UgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cmluZ2Nhc2UubG93ZXJjYXNlKHZhbHVlKVxuICB9LFxuICAvKipcbiAgICogQ29udmVydCBpbnRvIGNvbnN0YW50IGNhc2Ugc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBTdHJpbmcgdmFsdWUgdG8gY29udmVydC5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBDb252ZXJ0ZWQgc3RyaW5nLlxuICAgKi9cbiAgY29uc3RjYXNlICh2YWx1ZSkge1xuICAgIHJldHVybiBzdHJpbmdjYXNlLmNvbnN0Y2FzZSh2YWx1ZSlcbiAgfSxcbiAgLyoqXG4gICAqIENvbnZlcnQgaW50byBzbmFrZSBjYXNlIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBTdHJpbmcgdmFsdWUgdG8gY29udmVydC5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBDb252ZXJ0ZWQgc3RyaW5nLlxuICAgKi9cbiAgc25ha2VjYXNlICh2YWx1ZSkge1xuICAgIHJldHVybiBzdHJpbmdjYXNlLnNuYWtlY2FzZSh2YWx1ZSlcbiAgfSxcbiAgLyoqXG4gICAqIENvbnZlcnQgaW50byBwYXNjYWwgY2FzZSBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gU3RyaW5nIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udmVydGVkIHN0cmluZy5cbiAgICovXG4gIHBhc2NhbGNhc2UgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cmluZ2Nhc2UucGFzY2FsY2FzZSh2YWx1ZSlcbiAgfSxcbiAgLyoqXG4gICAqIENvbnZlcnQgaW50byBzZW50ZW5jZSBjYXNlIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBTdHJpbmcgdmFsdWUgdG8gY29udmVydC5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBDb252ZXJ0ZWQgc3RyaW5nLlxuICAgKi9cbiAgc2VudGVuY2VjYXNlICh2YWx1ZSkge1xuICAgIHJldHVybiBzdHJpbmdjYXNlLnNlbnRlbmNlY2FzZSh2YWx1ZSlcbiAgfSxcbiAgLyoqXG4gICAqIENvbnZlcnQgaW50byBwYXRoIGNhc2Ugc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFN0cmluZyB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnZlcnRlZCBzdHJpbmcuXG4gICAqL1xuICBwYXRoY2FzZSAodmFsdWUpIHtcbiAgICByZXR1cm4gc3RyaW5nY2FzZS5wYXRoY2FzZSh2YWx1ZSlcbiAgfSxcbiAgLyoqXG4gICAqIENvbnZlcnQgaW50byBzcGluYWwgY2FzZSBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gU3RyaW5nIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udmVydGVkIHN0cmluZy5cbiAgICovXG4gIHNwaW5hbGNhc2UgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cmluZ2Nhc2Uuc3BpbmFsY2FzZSh2YWx1ZSlcbiAgfSxcbiAgLyoqXG4gICAqIENvbnZlcnQgaW50byBlbnVtIGNhc2Ugc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFN0cmluZyB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnZlcnRlZCBzdHJpbmcuXG4gICAqL1xuICBlbnVtY2FzZSAodmFsdWUpIHtcbiAgICByZXR1cm4gc3RyaW5nY2FzZS5lbnVtY2FzZSh2YWx1ZSlcbiAgfSxcbiAgLyoqXG4gICAqIENvbnZlcnQgaW50byB0aXRsZSBjYXNlIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBTdHJpbmcgdmFsdWUgdG8gY29udmVydC5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBDb252ZXJ0ZWQgc3RyaW5nLlxuICAgKi9cbiAgdGl0bGVjYXNlICh2YWx1ZSkge1xuICAgIHJldHVybiBzdHJpbmdjYXNlLnRpdGxlY2FzZSh2YWx1ZSlcbiAgfSxcbiAgLyoqXG4gICAqIENvbnZlcnQgaW50byB1cHBlciBjYXNlIHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gU3RyaW5nIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udmVydGVkIHN0cmluZy5cbiAgICovXG4gIHVwcGVyY2FzZSAodmFsdWUpIHtcbiAgICByZXR1cm4gc3RyaW5nY2FzZS51cHBlcmNhc2UodmFsdWUpXG4gIH1cbn1cbiJdfQ==