const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, '../../public/js');
const APP_DIR = path.resolve(__dirname, '../../app/react');

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1&camelCase&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader'
      }
    ]
  }
};

module.exports = config;
