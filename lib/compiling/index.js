/**
 * Utility functions for compile source code.
 * @module coz-handlebars-engine/lib/compiling
 */

"use strict";

module.exports = {
    get compileHandlebars() { return require('./compile_handlebars'); },
    get createHandlebars() { return require('./create_handlebars'); },
    get precompileHandlebars() { return require('./precompile_handlebars'); }
};