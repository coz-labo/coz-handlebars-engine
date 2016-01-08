#!/usr/bin/env node

/**
 * Run tests
 */

"use strict";

process.chdir(__dirname + '/..');

const apeTasking = require('ape-tasking'),
    apeTesting = require('ape-testing');

apeTasking.runTasks([
    (callback) => {
        apeTesting.runNodeunit('test/*_test.js', {}, callback);
    }
], true);