const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { server: plugins } = require('./webpack-plugins');
const { resolve } = require('path');

const { NODE_ENV = 'development' } = process.env;

module.exports = () => ({
  target: 'node',
  // externals: [ nodeExternals() ],
  resolve: {
    modules: [
      resolve(__dirname, 'server'),
      resolve(__dirname, 'lib'),
      resolve(__dirname, 'src/js'),
      'node_modules'
    ]
  },
  entry: {
    server: resolve('./server/server.js'),
  },
  output: {
    path: resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['react'],
            plugins: [
              'transform-object-rest-spread',
              'transform-class-properties',
              'syntax-dynamic-import'
            ]
          }
        }
      }
    ]
  },
  plugins: plugins(NODE_ENV),
  devtool: 'source-map'
});
