'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = {
  // sourcemap support
  devtool: 'eval',
  entry: [
    path.join(__dirname, './public/javascripts/routes.jsx')
  ],
  output: {
    path: path.join(__dirname, './public/build/js'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    // add shortcut as alias
    alias: {
      '@components': path.join(__dirname, 'public/javascripts/components'),
      '@javascripts': path.join(__dirname, 'public/javascripts')
    },
    // extensions listed here can be omitted in `import`s
    extensions: ['', '.js', '.jsx'],
    // directories which are searched implicitly in `import`s
    modulesDirectories: ['node_modules', 'components', 'vendors']
  }
};