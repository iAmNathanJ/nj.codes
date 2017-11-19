const webpack = require('webpack');
const { client: plugins } = require('./webpack-plugins');
const { resolve } = require('path');

const { NODE_ENV = 'development' } = process.env;
const hash = NODE_ENV === 'production' ? '.[chunkHash:8]' : '';

module.exports = () => ({
  resolve: {
    modules: [
      resolve(__dirname, 'src/js'),
      resolve(__dirname, 'lib'),
      'node_modules'
    ]
  },
  entry: {
    main: resolve('./src/js/main.js'),
    polyfill: ['whatwg-fetch']
  },
  output: {
    path: resolve('./dist/js'),
    filename: `[name]${hash}.js`,
    chunkFilename: `[name]${hash}.js`,
    publicPath: '/js/'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  plugins: plugins(NODE_ENV),
  devtool: 'source-map'
});
