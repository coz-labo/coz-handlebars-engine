/**
 * Test case for compileHandlebars
 * Runs with nodeunit.
 */

'use strict'

const compileHandlebars = require('../lib/compiling/compile_handlebars.js')
const assert = require('assert')


it('Compile handlebars file.', async () => {
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
})

/* global describe, it */
