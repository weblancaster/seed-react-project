const webpackCfg = require('./webpack.config');

// Set node environment for testing
process.env.NODE_ENV = 'test';

module.exports = function (config) {
    config.set({
        basePath: '',
        browsers: ['PhantomJS'],
        files: [
            'src/loadtests.js'
        ],
        port: 9000,
        captureTimeout: 60000,
        frameworks: ['mocha', 'chai', 'sinon'],
        client: {
            mocha: {}
        },
        singleRun: true,
        reporters: ['mocha', 'coverage'],
        preprocessors: {
            'src/loadtests.js': ['webpack', 'sourcemap']
        },
        webpack: webpackCfg,
        webpackServer: {
            noInfo: true
        },
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                { type: 'html' },
                { type: 'text' }
            ]
        }
    });
};
