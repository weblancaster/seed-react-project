'use strict';

require('babel-polyfill');
require('core-js/fn/object/assign');

// Add support for all files containing test.js
const testsContext = require.context('./src', true, /.test.js/);
testsContext.keys().forEach(testsContext);
