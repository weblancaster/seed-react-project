'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let defaultSettings = require('./defaults');
const srcPath = path.join(__dirname, '/../src');
const port = 8000;
const publicPath = '/assets/';

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

module.exports = {
    additionalPaths: additionalPaths,
    port: defaultSettings.port,
    debug: true,
    devtool: 'eval',
    output: {
        path: path.join(__dirname, '/../dist/assets'),
        filename: 'app.js',
        publicPath: defaultSettings.publicPath
    },
    devServer: {
        contentBase: defaultSettings.srcPath,
        historyApiFallback: true,
        hot: true,
        port: port,
        publicPath: defaultSettings.publicPath,
        noInfo: false,
        quiet: true
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                include: srcPath,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.scss$/,
                include: /src/,
                loaders: [
                    'style',
                    'css?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
                    'sass',
                    'postcss'
                ]
            },
            {
                test: /\.css$/,
                exclude: /src/,
                loader: 'style!css'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            config: `${srcPath}/config/` + process.env.REACT_WEBPACK_ENV
        }
    },
    postcss: function () {
        return [autoprefixer];
    },
    plugins: [
        new ExtractTextPlugin(`./dist/assets/styles.css`)
    ]
};
