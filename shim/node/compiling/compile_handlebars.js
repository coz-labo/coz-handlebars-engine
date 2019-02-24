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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBpbGVfaGFuZGxlYmFycy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVIYW5kbGViYXJzIiwicmVxdWlyZSIsImNvbXBpbGVIYW5kbGViYXJzIiwic291cmNlIiwib3B0aW9ucyIsIkhhbmRsZWJhcnMiLCJoZWxwZXJzIiwiY29tcGlsZSIsIlN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsT0FBTyxDQUFDLHFCQUFELENBQWhDO0FBRUE7OztBQUNBLFNBQVNDLGlCQUFULENBQTRCQyxNQUE1QixFQUFvQ0MsT0FBcEMsRUFBNkM7QUFDM0MsTUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDWCxXQUFPLElBQVA7QUFDRDs7QUFDREMsRUFBQUEsT0FBTyxHQUFHQSxPQUFPLElBQUksRUFBckI7QUFDQSxNQUFJQyxVQUFVLEdBQUdMLGdCQUFnQixDQUFDSSxPQUFPLENBQUNFLE9BQVQsQ0FBakM7QUFDQSxTQUFPRCxVQUFVLENBQUNFLE9BQVgsQ0FBbUJDLE1BQU0sQ0FBQ0wsTUFBRCxDQUF6QixDQUFQO0FBQ0Q7O0FBRURNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlIsaUJBQWpCIiwic291cmNlUm9vdCI6Ii4uLy4uL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29tcGlsZSBoYW5kbGViYXJzIHRlbXBsYXRlIHN0cmluZy5cbiAqIEBmdW5jdGlvbiBjb21waWxlSGFuZGxlYmFyc1xuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSAtIFRlbXBsYXRlIHNvdXJjZSBzdHJpbmcuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbmFsIHNldHRpbmdzLlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLmhlbHBlcnNdIC0gSGFuZGxlYmFycyBoZWxwZXIgZnVuY3Rpb25zIHRvIHJlZ2lzdGVyLlxuICogQHJldHVybnMge2Z1bmN0aW9ufSBIYW5kbGViYXJzIHRlbXBsYXRlIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgdG1wbCA9IGNvbXBpbGVIYW5kbGViYXJzKCdIZXJlIGFyZSB7e3RvTG93ZXJjYXNlIG5hbWV9fS4nLCB7XG4gKiAgICAgICAgICBoZWxwZXJzOiB7XG4gKiAgICAgICAgICAgICAgdG9Mb3dlcmNhc2U6IGZ1bmN0aW9uKHN0cil7IHJldHVybiBzdHIudG9Mb3dlckNhc2UoKSB9XG4gKiAgICAgICAgICB9XG4gKiAgICAgfSlcbiAqICAgICBjb25zb2xlLmxvZyh0bXBsKHtuYW1lOiAnUmVkIEFwcGxlcyd9KSlcbiAqICAgICAgICAgIC8vIC0+IEhlcmUgYXJlIHJlZCBhcHBsZXMuXG4gKiBAc2VlIGh0dHA6Ly9oYW5kbGViYXJzanMuY29tL1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjcmVhdGVIYW5kbGViYXJzID0gcmVxdWlyZSgnLi9jcmVhdGVfaGFuZGxlYmFycycpXG5cbi8qKiBAbGVuZHMgY29tcGlsZUhhbmRsZWJhcnMgKi9cbmZ1bmN0aW9uIGNvbXBpbGVIYW5kbGViYXJzIChzb3VyY2UsIG9wdGlvbnMpIHtcbiAgaWYgKCFzb3VyY2UpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIGxldCBIYW5kbGViYXJzID0gY3JlYXRlSGFuZGxlYmFycyhvcHRpb25zLmhlbHBlcnMpXG4gIHJldHVybiBIYW5kbGViYXJzLmNvbXBpbGUoU3RyaW5nKHNvdXJjZSkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGlsZUhhbmRsZWJhcnNcbiJdfQ==