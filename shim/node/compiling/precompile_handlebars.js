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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWNvbXBpbGVfaGFuZGxlYmFycy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVIYW5kbGViYXJzIiwicmVxdWlyZSIsInByZWNvbXBpbGVIYW5kbGViYXJzIiwic291cmNlIiwib3B0aW9ucyIsIkhhbmRsZWJhcnMiLCJoZWxwZXJzIiwicHJlY29tcGlsZSIsIlN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLE9BQU8sQ0FBQyxxQkFBRCxDQUFoQztBQUVBOzs7QUFDQSxTQUFTQyxvQkFBVCxDQUErQkMsTUFBL0IsRUFBdUNDLE9BQXZDLEVBQWdEO0FBQzlDLE1BQUksQ0FBQ0QsTUFBTCxFQUFhO0FBQ1gsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0RDLEVBQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJLEVBQXJCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHTCxnQkFBZ0IsQ0FBQ0ksT0FBTyxDQUFDRSxPQUFULENBQWpDO0FBQ0EsU0FBTyx5QkFBeUJELFVBQVUsQ0FBQ0UsVUFBWCxDQUFzQkMsTUFBTSxDQUFDTCxNQUFELENBQTVCLENBQXpCLEdBQWlFLEdBQXhFO0FBQ0Q7O0FBRURNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlIsb0JBQWpCIiwic291cmNlUm9vdCI6Ii4uLy4uL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJlY29tcGlsZSBoYW5kbGViYXJzIHRlbXBsYXRlIHN0cmluZy5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y296L2xpYi91dGlsL2NvbXBpbGluZ1xuICogQGZ1bmN0aW9uIHByZWNvbXBpbGVIYW5kbGViYXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIC0gVGVtcGxhdGUgc291cmNlIHN0cmluZy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uYWwgc2V0dGluZ3MuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMuaGVscGVyc10gLSBIYW5kbGViYXJzIGhlbHBlciBmdW5jdGlvbnMgdG8gcmVnaXN0ZXIuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IEhhbmRsZWJhcnMgdGVtcGxhdGUgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciB0bXBsID0gcHJlY29tcGlsZUhhbmRsZWJhcnMoJ0hlcmUgYXJlIHt7dG9Mb3dlcmNhc2UgbmFtZX19LicsIHtcbiAqICAgICAgICAgIGhlbHBlcnM6IHtcbiAqICAgICAgICAgICAgICB0b0xvd2VyY2FzZTogZnVuY3Rpb24oc3RyKXsgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpIH1cbiAqICAgICAgICAgIH1cbiAqICAgICB9KVxuICogICAgIGNvbnNvbGUubG9nKHRtcGwpXG4gKiAgICAgICAgICAvLyAtPiBUZW1wbGF0ZSBmdW5jdGlvbiBzdHJpbmcuXG4gKiBAc2VlIGh0dHA6Ly9oYW5kbGViYXJzanMuY29tL1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjcmVhdGVIYW5kbGViYXJzID0gcmVxdWlyZSgnLi9jcmVhdGVfaGFuZGxlYmFycycpXG5cbi8qKiBAbGVuZHMgcHJlY29tcGlsZUhhbmRsZWJhcnMgKi9cbmZ1bmN0aW9uIHByZWNvbXBpbGVIYW5kbGViYXJzIChzb3VyY2UsIG9wdGlvbnMpIHtcbiAgaWYgKCFzb3VyY2UpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIGxldCBIYW5kbGViYXJzID0gY3JlYXRlSGFuZGxlYmFycyhvcHRpb25zLmhlbHBlcnMpXG4gIHJldHVybiAnSGFuZGxlYmFycy50ZW1wbGF0ZSgnICsgSGFuZGxlYmFycy5wcmVjb21waWxlKFN0cmluZyhzb3VyY2UpKSArICcpJ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByZWNvbXBpbGVIYW5kbGViYXJzXG4iXX0=