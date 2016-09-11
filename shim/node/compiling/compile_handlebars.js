/**
 * Compile handlebars template string.
 * @function compileHandlebars
 * @param {string} source - Template source string.
 * @param {object} options - Optional settings.
 * @param {object} [options.helpers] - Handlebars helper functions to register.
 * @returns {function} Handlebars template function.
 * @example
 *     var tmpl = compileHandlebars('Here are {{toLowercase name}}.', {
 *          helpers: {
 *              toLowercase: function(str){ return str.toLowerCase() }
 *          }
 *     })
 *     console.log(tmpl({name: 'Red Apples'}))
 *          // -> Here are red apples.
 * @see http://handlebarsjs.com/
 */

'use strict';

var createHandlebars = require('./create_handlebars');

/** @lends compileHandlebars */
function compileHandlebars(source, options) {
  if (!source) {
    return null;
  }
  options = options || {};
  var Handlebars = createHandlebars(options.helpers);
  return Handlebars.compile(String(source));
}

module.exports = compileHandlebars;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBpbGVfaGFuZGxlYmFycy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVIYW5kbGViYXJzIiwicmVxdWlyZSIsImNvbXBpbGVIYW5kbGViYXJzIiwic291cmNlIiwib3B0aW9ucyIsIkhhbmRsZWJhcnMiLCJoZWxwZXJzIiwiY29tcGlsZSIsIlN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBRUEsSUFBTUEsbUJBQW1CQyxRQUFRLHFCQUFSLENBQXpCOztBQUVBO0FBQ0EsU0FBU0MsaUJBQVQsQ0FBNEJDLE1BQTVCLEVBQW9DQyxPQUFwQyxFQUE2QztBQUMzQyxNQUFJLENBQUNELE1BQUwsRUFBYTtBQUNYLFdBQU8sSUFBUDtBQUNEO0FBQ0RDLFlBQVVBLFdBQVcsRUFBckI7QUFDQSxNQUFJQyxhQUFhTCxpQkFBaUJJLFFBQVFFLE9BQXpCLENBQWpCO0FBQ0EsU0FBT0QsV0FBV0UsT0FBWCxDQUFtQkMsT0FBT0wsTUFBUCxDQUFuQixDQUFQO0FBQ0Q7O0FBRURNLE9BQU9DLE9BQVAsR0FBaUJSLGlCQUFqQiIsImZpbGUiOiJjb21waWxlX2hhbmRsZWJhcnMuanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb21waWxlIGhhbmRsZWJhcnMgdGVtcGxhdGUgc3RyaW5nLlxuICogQGZ1bmN0aW9uIGNvbXBpbGVIYW5kbGViYXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIC0gVGVtcGxhdGUgc291cmNlIHN0cmluZy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uYWwgc2V0dGluZ3MuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMuaGVscGVyc10gLSBIYW5kbGViYXJzIGhlbHBlciBmdW5jdGlvbnMgdG8gcmVnaXN0ZXIuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IEhhbmRsZWJhcnMgdGVtcGxhdGUgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciB0bXBsID0gY29tcGlsZUhhbmRsZWJhcnMoJ0hlcmUgYXJlIHt7dG9Mb3dlcmNhc2UgbmFtZX19LicsIHtcbiAqICAgICAgICAgIGhlbHBlcnM6IHtcbiAqICAgICAgICAgICAgICB0b0xvd2VyY2FzZTogZnVuY3Rpb24oc3RyKXsgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpIH1cbiAqICAgICAgICAgIH1cbiAqICAgICB9KVxuICogICAgIGNvbnNvbGUubG9nKHRtcGwoe25hbWU6ICdSZWQgQXBwbGVzJ30pKVxuICogICAgICAgICAgLy8gLT4gSGVyZSBhcmUgcmVkIGFwcGxlcy5cbiAqIEBzZWUgaHR0cDovL2hhbmRsZWJhcnNqcy5jb20vXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNyZWF0ZUhhbmRsZWJhcnMgPSByZXF1aXJlKCcuL2NyZWF0ZV9oYW5kbGViYXJzJylcblxuLyoqIEBsZW5kcyBjb21waWxlSGFuZGxlYmFycyAqL1xuZnVuY3Rpb24gY29tcGlsZUhhbmRsZWJhcnMgKHNvdXJjZSwgb3B0aW9ucykge1xuICBpZiAoIXNvdXJjZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgbGV0IEhhbmRsZWJhcnMgPSBjcmVhdGVIYW5kbGViYXJzKG9wdGlvbnMuaGVscGVycylcbiAgcmV0dXJuIEhhbmRsZWJhcnMuY29tcGlsZShTdHJpbmcoc291cmNlKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb21waWxlSGFuZGxlYmFyc1xuIl19