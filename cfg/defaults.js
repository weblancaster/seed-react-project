'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const port = 8000;

module.exports = {
    srcPath: srcPath,
    publicPath: '/assets/',
    port: port
};
