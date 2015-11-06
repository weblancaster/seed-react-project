var path = require('path');

module.exports = {
  //entry: path.join(__dirname, './public/javascripts/components/main.jsx'),
  output: {
    path: path.join(__dirname, './public/build/js'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        //exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};