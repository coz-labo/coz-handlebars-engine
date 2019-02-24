/**
 * Test case for Engine
 * Runs with nodeunit.
 */

'use strict'

const Engine = require('../lib/engine.js')
const childProcess = require('child_process')
const assert = require('assert')


it('Construct a engine.', async () => {
  var engine = new Engine({})
  engine.set('foo', 'baz')
  assert.equal(engine.foo, 'baz')
  engine.set({ 'foo': 'quz' })
  assert.equal(engine.foo, 'quz')
  assert.equal(engine.get('foo'), 'quz')
  assert.equal(engine.clone().foo, 'quz')
})

it('Register helpers.', async () => {
  let helper01 = function () {
  }
  let engine = new Engine({
    helpers: {
      foo: helper01
    }
  })
  engine.registerHelper('bar', helper01)
  engine.registerHelpers({ baz: helper01 })
  assert.ok(engine.helpers)
  assert.ok(engine.helpers.foo)
  assert.ok(engine.helpers.bar)
  assert.ok(engine.helpers.baz)
})

it('Precompile template.', async () => {
  new Engine().precompile('{{name}}', function (err) {
    assert.ifError(err)
  })
})

it('Compile template.', async () => {
  var engine = new Engine({})
  engine.compile('Here are {{lowercase name}}.', function (err, tmpl) {
    assert.ifError(err)
    assert.ok(tmpl)
    assert.equal(tmpl({ name: 'Red Apples' }), 'Here are red apples.')

  })
})

it('Handle async error.', async () => {
  new Engine()._tryAsync(function () {
    throw new Error('foo')
  }, function (err) {
    assert.ok(!!err)

  })
})

/* global describe, it */
