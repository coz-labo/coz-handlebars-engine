'use strict'

const helpers = require('../lib/helpers')
const childProcess = require('child_process')
const assert = require('assert')

it('Run buildin helpers.', async () => {
  assert.ok(helpers)
  assert.equal(helpers.basename(null), 'null')
  assert.equal(helpers.basename('foo/bar.js'), 'bar.js')
  assert.equal(helpers.braces('foo'), '{foo}')
  assert.equal(helpers.camelcase('foo_bar'), 'fooBar')
  assert.equal(helpers.dirname('foo/bar.js'), 'foo')
  assert.equal(helpers.extname('foo/bar.js'), '.js')
  assert.equal(helpers.numeric('>=1.2.0'), '1.2.0')
  assert.equal(helpers.lowercase('Foo'), 'foo')
  assert.equal(helpers.snakecase('fooBar'), 'foo_bar')
  assert.equal(helpers.constcase('fooBar'), 'FOO_BAR')
  assert.equal(helpers.pascalcase('foo_bar'), 'FooBar')
  assert.equal(helpers.sentencecase('foo_bar'), 'Foo bar')
  assert.equal(helpers.spinalcase('foo_bar'), 'foo-bar')
  assert.equal(helpers.pathcase('foo_bar'), 'foo/bar')
  assert.equal(helpers.titlecase('foo_bar'), 'Foo Bar')
  assert.equal(helpers.uppercase('foo_bar'), 'FOO_BAR')
  assert.equal(helpers.read('_not_existing_filename'), '')
  assert.equal(helpers.json({ foo: 'bar' }), '{"foo":"bar"}')

  assert.ok(
    helpers.render(__filename, { data: { root: {} } })
  )
})

/* global describe, it */
