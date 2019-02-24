/**
 * Engine for handlebars.
 * @inner
 * @augments CozEngine
 * @constructor Engine
 * @param {object} [options] - Optional settings.
 * @param {object} [options.helpers] - Handlebars helper functions.
 * @see http://handlebarsjs.com/
 */
'use strict';

var helpers = require('./helpers');

var cozEngine = require('coz-engine');

var compiling = require('./compiling');
/** @lends Engine */


module.exports = cozEngine(
/** @lends Engine.prototype */
{
  /**
   * @constructs
   */
  init: function init() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var s = this;
    s.registerHelpers(helpers);
    s.registerHelpers(options.helpers);
  },

  /**
   * @inheritdoc
   * @implements CozEngine.prototype.precompile
   */
  precompile: function precompile(source, callback) {
    var s = this;

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
  compile: function compile(source, callback) {
    var s = this;

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
  registerHelper: function registerHelper(name, helper) {
    var s = this;
    s.helpers = s.helpers || {};
    s.helpers[name] = helper;
    return s;
  },

  /**
   * Register multiple helpers.
   * @param {object} helpers - Helpers to register.
   * @returns {HandlebarsEngine} - Returns self.
   */
  registerHelpers: function registerHelpers(helpers) {
    var s = this;
    var names = Object.keys(helpers || {});

    for (var i = 0, len = names.length; i < len; i++) {
      var name = names[i];
      s.registerHelper(name, helpers[name]);
    }

    return s;
  },
  _tryAsync: function _tryAsync(task, callback) {
    var s = this;
    var result;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5qcyJdLCJuYW1lcyI6WyJoZWxwZXJzIiwicmVxdWlyZSIsImNvekVuZ2luZSIsImNvbXBpbGluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0Iiwib3B0aW9ucyIsInMiLCJyZWdpc3RlckhlbHBlcnMiLCJwcmVjb21waWxlIiwic291cmNlIiwiY2FsbGJhY2siLCJfdHJ5QXN5bmMiLCJwcmVjb21waWxlSGFuZGxlYmFycyIsImNvbXBpbGUiLCJjb21waWxlSGFuZGxlYmFycyIsInVuZGVmaW5lZCIsInJlZ2lzdGVySGVscGVyIiwibmFtZSIsImhlbHBlciIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImkiLCJsZW4iLCJsZW5ndGgiLCJ0YXNrIiwicmVzdWx0IiwiY2FsbCIsImUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFVQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFlBQUQsQ0FBekI7O0FBQ0EsSUFBTUUsU0FBUyxHQUFHRixPQUFPLENBQUMsYUFBRCxDQUF6QjtBQUVBOzs7QUFDQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxTQUFTO0FBQ3hCO0FBQ0E7QUFDRTs7O0FBR0FJLEVBQUFBLElBSkYsa0JBSXNCO0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQ2xCLFFBQU1DLENBQUMsR0FBRyxJQUFWO0FBQ0FBLElBQUFBLENBQUMsQ0FBQ0MsZUFBRixDQUFrQlQsT0FBbEI7QUFDQVEsSUFBQUEsQ0FBQyxDQUFDQyxlQUFGLENBQWtCRixPQUFPLENBQUNQLE9BQTFCO0FBQ0QsR0FSSDs7QUFTRTs7OztBQUlBVSxFQUFBQSxVQWJGLHNCQWFjQyxNQWJkLEVBYXNCQyxRQWJ0QixFQWFnQztBQUM1QixRQUFNSixDQUFDLEdBQUcsSUFBVjs7QUFDQUEsSUFBQUEsQ0FBQyxDQUFDSyxTQUFGLENBQVksWUFBTTtBQUNoQixhQUFPVixTQUFTLENBQUNXLG9CQUFWLENBQStCSCxNQUEvQixFQUF1QztBQUM1Q1gsUUFBQUEsT0FBTyxFQUFFUSxDQUFDLENBQUNSO0FBRGlDLE9BQXZDLENBQVA7QUFHRCxLQUpELEVBSUdZLFFBSkg7QUFLRCxHQXBCSDs7QUFxQkU7Ozs7QUFJQUcsRUFBQUEsT0F6QkYsbUJBeUJXSixNQXpCWCxFQXlCbUJDLFFBekJuQixFQXlCNkI7QUFDekIsUUFBTUosQ0FBQyxHQUFHLElBQVY7O0FBQ0FBLElBQUFBLENBQUMsQ0FBQ0ssU0FBRixDQUFZLFlBQU07QUFDaEIsYUFBT1YsU0FBUyxDQUFDYSxpQkFBVixDQUE0QkwsTUFBNUIsRUFBb0M7QUFDekNYLFFBQUFBLE9BQU8sRUFBRVEsQ0FBQyxDQUFDUjtBQUQ4QixPQUFwQyxDQUFQO0FBR0QsS0FKRCxFQUlHWSxRQUpIO0FBS0QsR0FoQ0g7O0FBaUNFOzs7O0FBSUFaLEVBQUFBLE9BQU8sRUFBRWlCLFNBckNYOztBQXNDRTs7Ozs7O0FBTUFDLEVBQUFBLGNBNUNGLDBCQTRDa0JDLElBNUNsQixFQTRDd0JDLE1BNUN4QixFQTRDZ0M7QUFDNUIsUUFBTVosQ0FBQyxHQUFHLElBQVY7QUFDQUEsSUFBQUEsQ0FBQyxDQUFDUixPQUFGLEdBQVlRLENBQUMsQ0FBQ1IsT0FBRixJQUFhLEVBQXpCO0FBQ0FRLElBQUFBLENBQUMsQ0FBQ1IsT0FBRixDQUFXbUIsSUFBWCxJQUFvQkMsTUFBcEI7QUFDQSxXQUFPWixDQUFQO0FBQ0QsR0FqREg7O0FBa0RFOzs7OztBQUtBQyxFQUFBQSxlQXZERiwyQkF1RG1CVCxPQXZEbkIsRUF1RDRCO0FBQ3hCLFFBQUlRLENBQUMsR0FBRyxJQUFSO0FBQ0EsUUFBSWEsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWXZCLE9BQU8sSUFBSSxFQUF2QixDQUFaOztBQUNBLFNBQUssSUFBSXdCLENBQUMsR0FBRyxDQUFSLEVBQVdDLEdBQUcsR0FBR0osS0FBSyxDQUFDSyxNQUE1QixFQUFvQ0YsQ0FBQyxHQUFHQyxHQUF4QyxFQUE2Q0QsQ0FBQyxFQUE5QyxFQUFrRDtBQUNoRCxVQUFJTCxJQUFJLEdBQUdFLEtBQUssQ0FBRUcsQ0FBRixDQUFoQjtBQUNBaEIsTUFBQUEsQ0FBQyxDQUFDVSxjQUFGLENBQWlCQyxJQUFqQixFQUF1Qm5CLE9BQU8sQ0FBRW1CLElBQUYsQ0FBOUI7QUFDRDs7QUFDRCxXQUFPWCxDQUFQO0FBQ0QsR0EvREg7QUFnRUVLLEVBQUFBLFNBaEVGLHFCQWdFYWMsSUFoRWIsRUFnRW1CZixRQWhFbkIsRUFnRTZCO0FBQ3pCLFFBQU1KLENBQUMsR0FBRyxJQUFWO0FBQ0EsUUFBSW9CLE1BQUo7O0FBQ0EsUUFBSTtBQUNGQSxNQUFBQSxNQUFNLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxDQUFVckIsQ0FBVixDQUFUO0FBQ0QsS0FGRCxDQUVFLE9BQU9zQixDQUFQLEVBQVU7QUFDVmxCLE1BQUFBLFFBQVEsQ0FBQ2tCLENBQUQsQ0FBUjtBQUNBO0FBQ0Q7O0FBQ0RsQixJQUFBQSxRQUFRLENBQUMsSUFBRCxFQUFPZ0IsTUFBUCxDQUFSO0FBQ0Q7QUExRUgsQ0FGd0IsQ0FBMUI7QUErRUEiLCJzb3VyY2VSb290IjoiLi4vLi4vbGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFbmdpbmUgZm9yIGhhbmRsZWJhcnMuXG4gKiBAaW5uZXJcbiAqIEBhdWdtZW50cyBDb3pFbmdpbmVcbiAqIEBjb25zdHJ1Y3RvciBFbmdpbmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25hbCBzZXR0aW5ncy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5oZWxwZXJzXSAtIEhhbmRsZWJhcnMgaGVscGVyIGZ1bmN0aW9ucy5cbiAqIEBzZWUgaHR0cDovL2hhbmRsZWJhcnNqcy5jb20vXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKVxuY29uc3QgY296RW5naW5lID0gcmVxdWlyZSgnY296LWVuZ2luZScpXG5jb25zdCBjb21waWxpbmcgPSByZXF1aXJlKCcuL2NvbXBpbGluZycpXG5cbi8qKiBAbGVuZHMgRW5naW5lICovXG5tb2R1bGUuZXhwb3J0cyA9IGNvekVuZ2luZShcbiAgLyoqIEBsZW5kcyBFbmdpbmUucHJvdG90eXBlICovXG4gIHtcbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0c1xuICAgICAqL1xuICAgIGluaXQgKG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgcyA9IHRoaXNcbiAgICAgIHMucmVnaXN0ZXJIZWxwZXJzKGhlbHBlcnMpXG4gICAgICBzLnJlZ2lzdGVySGVscGVycyhvcHRpb25zLmhlbHBlcnMpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqIEBpbXBsZW1lbnRzIENvekVuZ2luZS5wcm90b3R5cGUucHJlY29tcGlsZVxuICAgICAqL1xuICAgIHByZWNvbXBpbGUgKHNvdXJjZSwgY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgICBzLl90cnlBc3luYygoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb21waWxpbmcucHJlY29tcGlsZUhhbmRsZWJhcnMoc291cmNlLCB7XG4gICAgICAgICAgaGVscGVyczogcy5oZWxwZXJzXG4gICAgICAgIH0pXG4gICAgICB9LCBjYWxsYmFjaylcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQGltcGxlbWVudHMgQ296RW5naW5lLnByb3RvdHlwZS5jb21waWxlXG4gICAgICovXG4gICAgY29tcGlsZSAoc291cmNlLCBjYWxsYmFjaykge1xuICAgICAgY29uc3QgcyA9IHRoaXNcbiAgICAgIHMuX3RyeUFzeW5jKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbXBpbGluZy5jb21waWxlSGFuZGxlYmFycyhzb3VyY2UsIHtcbiAgICAgICAgICBoZWxwZXJzOiBzLmhlbHBlcnNcbiAgICAgICAgfSlcbiAgICAgIH0sIGNhbGxiYWNrKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9ucy5cbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIGhlbHBlcnM6IHVuZGVmaW5lZCxcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIGhlbHBlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIGhlbHBlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoZWxwZXIgLSBIZWxwZXIgZnVuY3Rpb24uXG4gICAgICogQHJldHVybnMge0hhbmRsZWJhcnNFbmdpbmV9IC0gUmV0dXJucyBzZWxmLlxuICAgICAqL1xuICAgIHJlZ2lzdGVySGVscGVyIChuYW1lLCBoZWxwZXIpIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgICBzLmhlbHBlcnMgPSBzLmhlbHBlcnMgfHwge31cbiAgICAgIHMuaGVscGVyc1sgbmFtZSBdID0gaGVscGVyXG4gICAgICByZXR1cm4gc1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgbXVsdGlwbGUgaGVscGVycy5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaGVscGVycyAtIEhlbHBlcnMgdG8gcmVnaXN0ZXIuXG4gICAgICogQHJldHVybnMge0hhbmRsZWJhcnNFbmdpbmV9IC0gUmV0dXJucyBzZWxmLlxuICAgICAqL1xuICAgIHJlZ2lzdGVySGVscGVycyAoaGVscGVycykge1xuICAgICAgbGV0IHMgPSB0aGlzXG4gICAgICBsZXQgbmFtZXMgPSBPYmplY3Qua2V5cyhoZWxwZXJzIHx8IHt9KVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxldCBuYW1lID0gbmFtZXNbIGkgXVxuICAgICAgICBzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGhlbHBlcnNbIG5hbWUgXSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBzXG4gICAgfSxcbiAgICBfdHJ5QXN5bmMgKHRhc2ssIGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBzID0gdGhpc1xuICAgICAgbGV0IHJlc3VsdFxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gdGFzay5jYWxsKHMpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhbGxiYWNrKGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KVxuICAgIH1cbiAgfSlcblxuLyoqXG4gKiBAZXh0ZXJuYWwgQ296RW5naW5lXG4gKi9cbiJdfQ==