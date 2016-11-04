'use strict';

const path = require('path');
const webpack = require('webpack');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['dev', 'dist', 'test'];

// Set the correct environment
let env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
    env = 'test';
} else if (args.env === 'development') {
    env = 'dev';
} else if (args.env === 'production') {
    env = 'dist';
}
process.env.REACT_WEBPACK_ENV = env;

// set proxy if specified
let proxy;
if (!process.env.PROXY && env === 'dist' || process.env.PROXY === 'production') {
    proxy = new webpack.DefinePlugin({
        'process.env.PROXY': '"production"'
    });
} else if (!process.env.PROXY && env === 'dev' || process.env.PROXY === 'development' || env === 'test') {
    proxy = new webpack.DefinePlugin({
        'process.env.PROXY': '"development"'
    });
}

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
    let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
    let validEnv = isValid ? wantedEnv : 'dev';
    let config = require(path.join(__dirname, 'cfg/' + validEnv));

    config.plugins.push(proxy);

    return config;
}

module.exports = buildConfig(env);
