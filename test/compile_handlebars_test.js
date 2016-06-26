/**
 * Test case for compileHandlebars
 * Runs with nodeunit.
 */

'use strict'

const compileHandlebars = require('../lib/compiling/compile_handlebars.js')
const assert = require('assert')
const co = require('co')

it('Compile handlebars file.', () => co(function * () {
  assert.equal(compileHandlebars(null), null)
  var tmpl = compileHandlebars('Here are {{toLowercase name}}.', {
    helpers: {
      toLowercase: function (str) {
        return str.toLowerCase()
      }
    }
  })
  assert.ok(tmpl)
  assert.equal(tmpl({ name: 'Red Apples' }), 'Here are red apples.')
}))

/* global describe, it */
