/**
 * Test case for Engine
 * Runs with nodeunit.
 */

'use strict'

const Engine = require('../lib/engine.js')
const childProcess = require('child_process')
const assert = require('assert')
const co = require('co')

it('Construct a engine.', () => co(function * () {
  var engine = new Engine({})
  engine.set('foo', 'baz')
  assert.equal(engine.foo, 'baz')
  engine.set({ 'foo': 'quz' })
  assert.equal(engine.foo, 'quz')
  assert.equal(engine.get('foo'), 'quz')
  assert.equal(engine.clone().foo, 'quz')
}))

it('Register helpers.', () => co(function * () {
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
}))

it('Precompile template.', () => co(function * () {
  new Engine().precompile('{{name}}', function (err) {
    assert.ifError(err)
  })
}))

it('Compile template.', () => co(function * () {
  var engine = new Engine({})
  engine.compile('Here are {{lowercase name}}.', function (err, tmpl) {
    assert.ifError(err)
    assert.ok(tmpl)
    assert.equal(tmpl({ name: 'Red Apples' }), 'Here are red apples.')

  })
}))

it('Handle async error.', () => co(function * () {
  new Engine()._tryAsync(function () {
    throw new Error('foo')
  }, function (err) {
    assert.ok(!!err)

  })
}))

/* global describe, it */
