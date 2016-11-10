/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
    return {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                include: srcPath,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.css$/,
                include: srcPath,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
                    'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: srcPath,
                loader: 'style!css'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            }
        ]
    };
}

module.exports = {
    srcPath: srcPath,
    publicPath: '/assets/',
    port: dfltPort,
    getDefaultModules: getDefaultModules
};
