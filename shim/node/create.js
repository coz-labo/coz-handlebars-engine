/**
 * Create an engine.
 * @memberof module:coz-handlebars-engine/lib
 * @function create
 * @returns {Engine} - An engine instance.
 */

'use strict';

var Engine = require('./engine');

/** @lends create */
function create(config) {
  return new Engine(config);
}

module.exports = create;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6WyJFbmdpbmUiLCJyZXF1aXJlIiwiY3JlYXRlIiwiY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFPQTs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFVBQVIsQ0FBZjs7QUFFQTtBQUNBLFNBQVNDLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU8sSUFBSUgsTUFBSixDQUFXRyxNQUFYLENBQVA7QUFDRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQkgsTUFBakIiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlIGFuIGVuZ2luZS5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y296LWhhbmRsZWJhcnMtZW5naW5lL2xpYlxuICogQGZ1bmN0aW9uIGNyZWF0ZVxuICogQHJldHVybnMge0VuZ2luZX0gLSBBbiBlbmdpbmUgaW5zdGFuY2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IEVuZ2luZSA9IHJlcXVpcmUoJy4vZW5naW5lJylcblxuLyoqIEBsZW5kcyBjcmVhdGUgKi9cbmZ1bmN0aW9uIGNyZWF0ZSAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgRW5naW5lKGNvbmZpZylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG4iXX0=