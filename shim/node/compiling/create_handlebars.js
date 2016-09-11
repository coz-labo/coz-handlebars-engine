/***
 * Create a new handlebars.
 * @function createHandlebars
 * @param {object} helpers - Handlebars helpers.
 * @returns {Handlebars} - handlebars context.
 * @private
 */

'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlebars = require('handlebars');

/** @lends createHandlebars */
function createHandlebars(helpers) {
  var Handlebars = handlebars.create();
  if (helpers) {
    (0, _keys2.default)(helpers).forEach(function (name) {
      var helper = helpers[name];
      Handlebars.registerHelper(name, helper);
    });
  }
  return Handlebars;
}

module.exports = createHandlebars;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZV9oYW5kbGViYXJzLmpzIl0sIm5hbWVzIjpbImhhbmRsZWJhcnMiLCJyZXF1aXJlIiwiY3JlYXRlSGFuZGxlYmFycyIsImhlbHBlcnMiLCJIYW5kbGViYXJzIiwiY3JlYXRlIiwiZm9yRWFjaCIsIm5hbWUiLCJoZWxwZXIiLCJyZWdpc3RlckhlbHBlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQVFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsWUFBUixDQUFuQjs7QUFFQTtBQUNBLFNBQVNDLGdCQUFULENBQTJCQyxPQUEzQixFQUFvQztBQUNsQyxNQUFJQyxhQUFhSixXQUFXSyxNQUFYLEVBQWpCO0FBQ0EsTUFBSUYsT0FBSixFQUFhO0FBQ1gsd0JBQVlBLE9BQVosRUFBcUJHLE9BQXJCLENBQTZCLFVBQUNDLElBQUQsRUFBVTtBQUNyQyxVQUFJQyxTQUFTTCxRQUFTSSxJQUFULENBQWI7QUFDQUgsaUJBQVdLLGNBQVgsQ0FBMEJGLElBQTFCLEVBQWdDQyxNQUFoQztBQUNELEtBSEQ7QUFJRDtBQUNELFNBQU9KLFVBQVA7QUFDRDs7QUFFRE0sT0FBT0MsT0FBUCxHQUFpQlQsZ0JBQWpCIiwiZmlsZSI6ImNyZWF0ZV9oYW5kbGViYXJzLmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKipcbiAqIENyZWF0ZSBhIG5ldyBoYW5kbGViYXJzLlxuICogQGZ1bmN0aW9uIGNyZWF0ZUhhbmRsZWJhcnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBoZWxwZXJzIC0gSGFuZGxlYmFycyBoZWxwZXJzLlxuICogQHJldHVybnMge0hhbmRsZWJhcnN9IC0gaGFuZGxlYmFycyBjb250ZXh0LlxuICogQHByaXZhdGVcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgaGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hhbmRsZWJhcnMnKVxuXG4vKiogQGxlbmRzIGNyZWF0ZUhhbmRsZWJhcnMgKi9cbmZ1bmN0aW9uIGNyZWF0ZUhhbmRsZWJhcnMgKGhlbHBlcnMpIHtcbiAgbGV0IEhhbmRsZWJhcnMgPSBoYW5kbGViYXJzLmNyZWF0ZSgpXG4gIGlmIChoZWxwZXJzKSB7XG4gICAgT2JqZWN0LmtleXMoaGVscGVycykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgbGV0IGhlbHBlciA9IGhlbHBlcnNbIG5hbWUgXVxuICAgICAgSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBoZWxwZXIpXG4gICAgfSlcbiAgfVxuICByZXR1cm4gSGFuZGxlYmFyc1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUhhbmRsZWJhcnNcbiJdfQ==