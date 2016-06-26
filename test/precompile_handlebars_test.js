/**
 * Test case for module:leaf/lib/util/compiling/compileHandlebars
 * Runs with nodeunit.
 */

'use strict'

const precompileHandlebars = require('../lib/compiling/precompile_handlebars.js')
const assert = require('assert')
const co = require('co')

it('Compile handlebars file.', () => co(function * () {
  assert.equal(precompileHandlebars(null), null)
  let tmpl = precompileHandlebars('Here are {{toLowercase name}}.', {
    helpers: {
      toLowercase: function (str) {
        return str.toLowerCase()
      }
    }
  })
  assert.ok(tmpl)
}))

/* global describe, it */
