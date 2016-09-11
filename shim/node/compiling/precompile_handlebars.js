/**
 * Precompile handlebars template string.
 * @memberof module:coz/lib/util/compiling
 * @function precompileHandlebars
 * @param {string} source - Template source string.
 * @param {object} options - Optional settings.
 * @param {object} [options.helpers] - Handlebars helper functions to register.
 * @returns {function} Handlebars template function.
 * @example
 *     var tmpl = precompileHandlebars('Here are {{toLowercase name}}.', {
 *          helpers: {
 *              toLowercase: function(str){ return str.toLowerCase() }
 *          }
 *     })
 *     console.log(tmpl)
 *          // -> Template function string.
 * @see http://handlebarsjs.com/
 */

'use strict';

var createHandlebars = require('./create_handlebars');

/** @lends precompileHandlebars */
function precompileHandlebars(source, options) {
  if (!source) {
    return null;
  }
  options = options || {};
  var Handlebars = createHandlebars(options.helpers);
  return 'Handlebars.template(' + Handlebars.precompile(String(source)) + ')';
}

module.exports = precompileHandlebars;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWNvbXBpbGVfaGFuZGxlYmFycy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVIYW5kbGViYXJzIiwicmVxdWlyZSIsInByZWNvbXBpbGVIYW5kbGViYXJzIiwic291cmNlIiwib3B0aW9ucyIsIkhhbmRsZWJhcnMiLCJoZWxwZXJzIiwicHJlY29tcGlsZSIsIlN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOztBQUVBLElBQU1BLG1CQUFtQkMsUUFBUSxxQkFBUixDQUF6Qjs7QUFFQTtBQUNBLFNBQVNDLG9CQUFULENBQStCQyxNQUEvQixFQUF1Q0MsT0FBdkMsRUFBZ0Q7QUFDOUMsTUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDWCxXQUFPLElBQVA7QUFDRDtBQUNEQyxZQUFVQSxXQUFXLEVBQXJCO0FBQ0EsTUFBSUMsYUFBYUwsaUJBQWlCSSxRQUFRRSxPQUF6QixDQUFqQjtBQUNBLFNBQU8seUJBQXlCRCxXQUFXRSxVQUFYLENBQXNCQyxPQUFPTCxNQUFQLENBQXRCLENBQXpCLEdBQWlFLEdBQXhFO0FBQ0Q7O0FBRURNLE9BQU9DLE9BQVAsR0FBaUJSLG9CQUFqQiIsImZpbGUiOiJwcmVjb21waWxlX2hhbmRsZWJhcnMuanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcmVjb21waWxlIGhhbmRsZWJhcnMgdGVtcGxhdGUgc3RyaW5nLlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3ovbGliL3V0aWwvY29tcGlsaW5nXG4gKiBAZnVuY3Rpb24gcHJlY29tcGlsZUhhbmRsZWJhcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgLSBUZW1wbGF0ZSBzb3VyY2Ugc3RyaW5nLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25hbCBzZXR0aW5ncy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5oZWxwZXJzXSAtIEhhbmRsZWJhcnMgaGVscGVyIGZ1bmN0aW9ucyB0byByZWdpc3Rlci5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gSGFuZGxlYmFycyB0ZW1wbGF0ZSBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIHRtcGwgPSBwcmVjb21waWxlSGFuZGxlYmFycygnSGVyZSBhcmUge3t0b0xvd2VyY2FzZSBuYW1lfX0uJywge1xuICogICAgICAgICAgaGVscGVyczoge1xuICogICAgICAgICAgICAgIHRvTG93ZXJjYXNlOiBmdW5jdGlvbihzdHIpeyByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkgfVxuICogICAgICAgICAgfVxuICogICAgIH0pXG4gKiAgICAgY29uc29sZS5sb2codG1wbClcbiAqICAgICAgICAgIC8vIC0+IFRlbXBsYXRlIGZ1bmN0aW9uIHN0cmluZy5cbiAqIEBzZWUgaHR0cDovL2hhbmRsZWJhcnNqcy5jb20vXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNyZWF0ZUhhbmRsZWJhcnMgPSByZXF1aXJlKCcuL2NyZWF0ZV9oYW5kbGViYXJzJylcblxuLyoqIEBsZW5kcyBwcmVjb21waWxlSGFuZGxlYmFycyAqL1xuZnVuY3Rpb24gcHJlY29tcGlsZUhhbmRsZWJhcnMgKHNvdXJjZSwgb3B0aW9ucykge1xuICBpZiAoIXNvdXJjZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgbGV0IEhhbmRsZWJhcnMgPSBjcmVhdGVIYW5kbGViYXJzKG9wdGlvbnMuaGVscGVycylcbiAgcmV0dXJuICdIYW5kbGViYXJzLnRlbXBsYXRlKCcgKyBIYW5kbGViYXJzLnByZWNvbXBpbGUoU3RyaW5nKHNvdXJjZSkpICsgJyknXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJlY29tcGlsZUhhbmRsZWJhcnNcbiJdfQ==