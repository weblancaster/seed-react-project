'use strict';

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let defaultSettings = require('./defaults');
const srcPath = path.join(__dirname, '/../src');
const publicPath = '/assets/';

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

module.exports = {
    // port: defaultSettings.port,
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
        port: defaultSettings.port,
        publicPath: defaultSettings.publicPath,
        noInfo: false,
        quiet: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: srcPath
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            import: true,
                            camelCase: true,
                            localIdentName: '[name]-[local]___[hash:base64:5]'
                        }
                    },
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer'),
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            config: `${srcPath}/config/` + process.env.REACT_WEBPACK_ENV
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './dist/assets/styles.css',
            disable: false,
            allChunks: true
        })
    ]
};
