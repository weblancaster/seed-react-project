'use strict';

let path = require('path');
let webpack = require('webpack');
let Dashboard = require('webpack-dashboard');
let DashboardPlugin = require('webpack-dashboard/plugin');
let dashboard = new Dashboard();
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new DashboardPlugin(dashboard.setData),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ]
});

// Add needed loaders to the defaults here
config.module.rules.push(
    {
        test: /\.(js|jsx)$/,
        use: [
            'react-hot-loader',
            'babel-loader'
        ],
        // include: [].concat(config.additionalPaths, [path.join(__dirname, '/../src')])
    }
);


module.exports = config;
