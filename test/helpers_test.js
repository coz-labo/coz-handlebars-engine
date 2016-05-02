'use strict'

const helpers = require('../lib/helpers')
const childProcess = require('child_process')

exports[ 'Run buildin helpers.' ] = function (test) {
  test.ok(helpers)
  test.equal(helpers.basename(null), "null")
  test.equal(helpers.basename("foo/bar.js"), "bar.js")
  test.equal(helpers.braces("foo"), "{foo}")
  test.equal(helpers.camelcase("foo_bar"), "fooBar")
  test.equal(helpers.dirname("foo/bar.js"), "foo")
  test.equal(helpers.extname("foo/bar.js"), ".js")
  if (childProcess.execSync) {
    test.ok(helpers.eval("ls"))
  }
  test.equal(helpers.numeric(">=1.2.0"), "1.2.0")
  test.equal(helpers.lowercase("Foo"), "foo")
  test.equal(helpers.snakecase("fooBar"), "foo_bar")
  test.equal(helpers.constcase("fooBar"), "FOO_BAR")
  test.equal(helpers.pascalcase("foo_bar"), "FooBar")
  test.equal(helpers.sentencecase("foo_bar"), "Foo bar")
  test.equal(helpers.spinalcase("foo_bar"), "foo-bar")
  test.equal(helpers.pathcase("foo_bar"), "foo/bar")
  test.equal(helpers.titlecase("foo_bar"), "Foo Bar")
  test.equal(helpers.uppercase("foo_bar"), "FOO_BAR")
  test.equal(helpers.read('_not_existing_filename'), '')
  test.equal(helpers.json({ foo: 'bar' }), '{"foo":"bar"}')

  test.ok(helpers.render(__filename, { data: { root: {} } }))
  test.done()
}
