'use strict'

const assert = require('assert')


const index = require('../lib/index')

it('Eval properties.', async () => {
  assert.ok(index)
  assert.ok(index.helpers)
  assert.ok(index.handlebars)
})

/* global describe, it */
