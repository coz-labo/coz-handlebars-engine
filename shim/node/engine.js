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

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

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
    var names = (0, _keys2.default)(helpers || {});
    for (var i = 0, len = names.length; i < len; i++) {
      var name = names[i];
      s.registerHelper(name, helpers[name]);
    }
    return s;
  },
  _tryAsync: function _tryAsync(task, callback) {
    var s = this;
    var result = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5qcyJdLCJuYW1lcyI6WyJoZWxwZXJzIiwicmVxdWlyZSIsImNvekVuZ2luZSIsImNvbXBpbGluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0Iiwib3B0aW9ucyIsInMiLCJyZWdpc3RlckhlbHBlcnMiLCJwcmVjb21waWxlIiwic291cmNlIiwiY2FsbGJhY2siLCJfdHJ5QXN5bmMiLCJwcmVjb21waWxlSGFuZGxlYmFycyIsImNvbXBpbGUiLCJjb21waWxlSGFuZGxlYmFycyIsInVuZGVmaW5lZCIsInJlZ2lzdGVySGVscGVyIiwibmFtZSIsImhlbHBlciIsIm5hbWVzIiwiaSIsImxlbiIsImxlbmd0aCIsInRhc2siLCJyZXN1bHQiLCJjYWxsIiwiZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFDQSxJQUFNQyxZQUFZRCxRQUFRLFlBQVIsQ0FBbEI7QUFDQSxJQUFNRSxZQUFZRixRQUFRLGFBQVIsQ0FBbEI7O0FBRUE7QUFDQUcsT0FBT0MsT0FBUCxHQUFpQkg7QUFDZjtBQUNBO0FBQ0U7OztBQUdBSSxNQUpGLGtCQUlzQjtBQUFBLFFBQWRDLE9BQWMseURBQUosRUFBSTs7QUFDbEIsUUFBTUMsSUFBSSxJQUFWO0FBQ0FBLE1BQUVDLGVBQUYsQ0FBa0JULE9BQWxCO0FBQ0FRLE1BQUVDLGVBQUYsQ0FBa0JGLFFBQVFQLE9BQTFCO0FBQ0QsR0FSSDs7QUFTRTs7OztBQUlBVSxZQWJGLHNCQWFjQyxNQWJkLEVBYXNCQyxRQWJ0QixFQWFnQztBQUM1QixRQUFNSixJQUFJLElBQVY7QUFDQUEsTUFBRUssU0FBRixDQUFZLFlBQU07QUFDaEIsYUFBT1YsVUFBVVcsb0JBQVYsQ0FBK0JILE1BQS9CLEVBQXVDO0FBQzVDWCxpQkFBU1EsRUFBRVI7QUFEaUMsT0FBdkMsQ0FBUDtBQUdELEtBSkQsRUFJR1ksUUFKSDtBQUtELEdBcEJIOztBQXFCRTs7OztBQUlBRyxTQXpCRixtQkF5QldKLE1BekJYLEVBeUJtQkMsUUF6Qm5CLEVBeUI2QjtBQUN6QixRQUFNSixJQUFJLElBQVY7QUFDQUEsTUFBRUssU0FBRixDQUFZLFlBQU07QUFDaEIsYUFBT1YsVUFBVWEsaUJBQVYsQ0FBNEJMLE1BQTVCLEVBQW9DO0FBQ3pDWCxpQkFBU1EsRUFBRVI7QUFEOEIsT0FBcEMsQ0FBUDtBQUdELEtBSkQsRUFJR1ksUUFKSDtBQUtELEdBaENIOztBQWlDRTs7OztBQUlBWixXQUFTaUIsU0FyQ1g7QUFzQ0U7Ozs7OztBQU1BQyxnQkE1Q0YsMEJBNENrQkMsSUE1Q2xCLEVBNEN3QkMsTUE1Q3hCLEVBNENnQztBQUM1QixRQUFNWixJQUFJLElBQVY7QUFDQUEsTUFBRVIsT0FBRixHQUFZUSxFQUFFUixPQUFGLElBQWEsRUFBekI7QUFDQVEsTUFBRVIsT0FBRixDQUFXbUIsSUFBWCxJQUFvQkMsTUFBcEI7QUFDQSxXQUFPWixDQUFQO0FBQ0QsR0FqREg7O0FBa0RFOzs7OztBQUtBQyxpQkF2REYsMkJBdURtQlQsT0F2RG5CLEVBdUQ0QjtBQUN4QixRQUFJUSxJQUFJLElBQVI7QUFDQSxRQUFJYSxRQUFRLG9CQUFZckIsV0FBVyxFQUF2QixDQUFaO0FBQ0EsU0FBSyxJQUFJc0IsSUFBSSxDQUFSLEVBQVdDLE1BQU1GLE1BQU1HLE1BQTVCLEVBQW9DRixJQUFJQyxHQUF4QyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDaEQsVUFBSUgsT0FBT0UsTUFBT0MsQ0FBUCxDQUFYO0FBQ0FkLFFBQUVVLGNBQUYsQ0FBaUJDLElBQWpCLEVBQXVCbkIsUUFBU21CLElBQVQsQ0FBdkI7QUFDRDtBQUNELFdBQU9YLENBQVA7QUFDRCxHQS9ESDtBQWdFRUssV0FoRUYscUJBZ0VhWSxJQWhFYixFQWdFbUJiLFFBaEVuQixFQWdFNkI7QUFDekIsUUFBTUosSUFBSSxJQUFWO0FBQ0EsUUFBSWtCLGVBQUo7QUFDQSxRQUFJO0FBQ0ZBLGVBQVNELEtBQUtFLElBQUwsQ0FBVW5CLENBQVYsQ0FBVDtBQUNELEtBRkQsQ0FFRSxPQUFPb0IsQ0FBUCxFQUFVO0FBQ1ZoQixlQUFTZ0IsQ0FBVDtBQUNBO0FBQ0Q7QUFDRGhCLGFBQVMsSUFBVCxFQUFlYyxNQUFmO0FBQ0Q7QUExRUgsQ0FGZSxDQUFqQjs7QUErRUEiLCJmaWxlIjoiZW5naW5lLmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRW5naW5lIGZvciBoYW5kbGViYXJzLlxuICogQGlubmVyXG4gKiBAYXVnbWVudHMgQ296RW5naW5lXG4gKiBAY29uc3RydWN0b3IgRW5naW5lXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9uYWwgc2V0dGluZ3MuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMuaGVscGVyc10gLSBIYW5kbGViYXJzIGhlbHBlciBmdW5jdGlvbnMuXG4gKiBAc2VlIGh0dHA6Ly9oYW5kbGViYXJzanMuY29tL1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBoZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJylcbmNvbnN0IGNvekVuZ2luZSA9IHJlcXVpcmUoJ2Nvei1lbmdpbmUnKVxuY29uc3QgY29tcGlsaW5nID0gcmVxdWlyZSgnLi9jb21waWxpbmcnKVxuXG4vKiogQGxlbmRzIEVuZ2luZSAqL1xubW9kdWxlLmV4cG9ydHMgPSBjb3pFbmdpbmUoXG4gIC8qKiBAbGVuZHMgRW5naW5lLnByb3RvdHlwZSAqL1xuICB7XG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdHNcbiAgICAgKi9cbiAgICBpbml0IChvcHRpb25zID0ge30pIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgICBzLnJlZ2lzdGVySGVscGVycyhoZWxwZXJzKVxuICAgICAgcy5yZWdpc3RlckhlbHBlcnMob3B0aW9ucy5oZWxwZXJzKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKiBAaW1wbGVtZW50cyBDb3pFbmdpbmUucHJvdG90eXBlLnByZWNvbXBpbGVcbiAgICAgKi9cbiAgICBwcmVjb21waWxlIChzb3VyY2UsIGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBzID0gdGhpc1xuICAgICAgcy5fdHJ5QXN5bmMoKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29tcGlsaW5nLnByZWNvbXBpbGVIYW5kbGViYXJzKHNvdXJjZSwge1xuICAgICAgICAgIGhlbHBlcnM6IHMuaGVscGVyc1xuICAgICAgICB9KVxuICAgICAgfSwgY2FsbGJhY2spXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqIEBpbXBsZW1lbnRzIENvekVuZ2luZS5wcm90b3R5cGUuY29tcGlsZVxuICAgICAqL1xuICAgIGNvbXBpbGUgKHNvdXJjZSwgY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgICBzLl90cnlBc3luYygoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb21waWxpbmcuY29tcGlsZUhhbmRsZWJhcnMoc291cmNlLCB7XG4gICAgICAgICAgaGVscGVyczogcy5oZWxwZXJzXG4gICAgICAgIH0pXG4gICAgICB9LCBjYWxsYmFjaylcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbnMuXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICBoZWxwZXJzOiB1bmRlZmluZWQsXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBoZWxwZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBoZWxwZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGVscGVyIC0gSGVscGVyIGZ1bmN0aW9uLlxuICAgICAqIEByZXR1cm5zIHtIYW5kbGViYXJzRW5naW5lfSAtIFJldHVybnMgc2VsZi5cbiAgICAgKi9cbiAgICByZWdpc3RlckhlbHBlciAobmFtZSwgaGVscGVyKSB7XG4gICAgICBjb25zdCBzID0gdGhpc1xuICAgICAgcy5oZWxwZXJzID0gcy5oZWxwZXJzIHx8IHt9XG4gICAgICBzLmhlbHBlcnNbIG5hbWUgXSA9IGhlbHBlclxuICAgICAgcmV0dXJuIHNcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIG11bHRpcGxlIGhlbHBlcnMuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGhlbHBlcnMgLSBIZWxwZXJzIHRvIHJlZ2lzdGVyLlxuICAgICAqIEByZXR1cm5zIHtIYW5kbGViYXJzRW5naW5lfSAtIFJldHVybnMgc2VsZi5cbiAgICAgKi9cbiAgICByZWdpc3RlckhlbHBlcnMgKGhlbHBlcnMpIHtcbiAgICAgIGxldCBzID0gdGhpc1xuICAgICAgbGV0IG5hbWVzID0gT2JqZWN0LmtleXMoaGVscGVycyB8fCB7fSlcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBuYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgbmFtZSA9IG5hbWVzWyBpIF1cbiAgICAgICAgcy5yZWdpc3RlckhlbHBlcihuYW1lLCBoZWxwZXJzWyBuYW1lIF0pXG4gICAgICB9XG4gICAgICByZXR1cm4gc1xuICAgIH0sXG4gICAgX3RyeUFzeW5jICh0YXNrLCBjYWxsYmFjaykge1xuICAgICAgY29uc3QgcyA9IHRoaXNcbiAgICAgIGxldCByZXN1bHRcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IHRhc2suY2FsbChzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWxsYmFjayhlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdClcbiAgICB9XG4gIH0pXG5cbi8qKlxuICogQGV4dGVybmFsIENvekVuZ2luZVxuICovXG4iXX0=