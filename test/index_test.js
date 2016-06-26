'use strict'

const assert = require('assert')
const co = require('co')

const index = require('../lib/index')

it('Eval properties.', () => co(function * () {
  assert.ok(index)
  assert.ok(index.helpers)
  assert.ok(index.handlebars)
}))

/* global describe, it */