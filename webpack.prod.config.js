module.exports = {
  entry: {
    main: './lib/index.js',

  },
  output: {
    path: './public/home',
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

