/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const defaultSettings = require('./cfg/defaults');
const open = require('open');

new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer)
    .listen(defaultSettings.port, 'localhost', (err) => {
        if (err) {
            console.log(err);
        }

        console.log('Listening at localhost:' + defaultSettings.port);
        console.log('Opening your system browser...');
        open('http://localhost:' + defaultSettings.port);
    });
