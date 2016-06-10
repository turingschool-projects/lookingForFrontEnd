const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './lib/index.js',

  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', 'css'],
  },
};

