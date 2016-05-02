/**
 * Test case for compileHandlebars
 * Runs with nodeunit.
 */

'use strict'

const compileHandlebars = require('../lib/compiling/compile_handlebars.js')

exports[ 'Compile handlebars file.' ] = function (test) {
  test.equal(compileHandlebars(null), null)
  var tmpl = compileHandlebars('Here are {{toLowercase name}}.', {
    helpers: {
      toLowercase: function (str) {
        return str.toLowerCase()
      }
    }
  })
  test.ok(tmpl)
  test.equal(tmpl({ name: 'Red Apples' }), 'Here are red apples.')
  test.done()
}