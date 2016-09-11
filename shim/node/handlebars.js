/**
 * Handlebars with coz buildin helpers.
 * @module handlebars
 */

'use strict';

var createHandlebars = require('./compiling/create_handlebars');
var helpers = require('./helpers');

function create() {
  return createHandlebars(helpers);
}

var handlebars = create();
handlebars.create = create;

module.exports = handlebars;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmRsZWJhcnMuanMiXSwibmFtZXMiOlsiY3JlYXRlSGFuZGxlYmFycyIsInJlcXVpcmUiLCJoZWxwZXJzIiwiY3JlYXRlIiwiaGFuZGxlYmFycyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOztBQUVBLElBQU1BLG1CQUFtQkMsUUFBUSwrQkFBUixDQUF6QjtBQUNBLElBQU1DLFVBQVVELFFBQVEsV0FBUixDQUFoQjs7QUFFQSxTQUFTRSxNQUFULEdBQW1CO0FBQ2pCLFNBQU9ILGlCQUFpQkUsT0FBakIsQ0FBUDtBQUNEOztBQUVELElBQUlFLGFBQWFELFFBQWpCO0FBQ0FDLFdBQVdELE1BQVgsR0FBb0JBLE1BQXBCOztBQUVBRSxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQiIsImZpbGUiOiJoYW5kbGViYXJzLmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSGFuZGxlYmFycyB3aXRoIGNveiBidWlsZGluIGhlbHBlcnMuXG4gKiBAbW9kdWxlIGhhbmRsZWJhcnNcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgY3JlYXRlSGFuZGxlYmFycyA9IHJlcXVpcmUoJy4vY29tcGlsaW5nL2NyZWF0ZV9oYW5kbGViYXJzJylcbmNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKVxuXG5mdW5jdGlvbiBjcmVhdGUgKCkge1xuICByZXR1cm4gY3JlYXRlSGFuZGxlYmFycyhoZWxwZXJzKVxufVxuXG5sZXQgaGFuZGxlYmFycyA9IGNyZWF0ZSgpXG5oYW5kbGViYXJzLmNyZWF0ZSA9IGNyZWF0ZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhbmRsZWJhcnNcbiJdfQ==