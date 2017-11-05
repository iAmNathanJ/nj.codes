const webpack = require('webpack');
const brotli = require('brotli-webpack-plugin');
const { resolve } = require('path');

module.exports = (env, argv) => ({
  resolve: {
    modules: [
      resolve(__dirname, 'src/js'),
      resolve(__dirname, 'lib'),
      'node_modules'
    ]
  },
  entry: {
    main: resolve('./src/js/main.js')
  },
  output: {
    path: resolve('./dist/js'),
    filename: '[name].js',
    chunkFilename: '[name].js',
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
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new brotli({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  devtool: 'source-map'
});
