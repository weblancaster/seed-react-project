'use strict';

require('babel-polyfill');
require('core-js/fn/object/assign');

// Add support for all files containing test.js
const testsContext = require.context('.', true, /(Test\.js$)|(.test\.js$)/);
testsContext.keys().forEach(testsContext);
