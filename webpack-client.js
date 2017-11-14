const webpack = require('webpack');
const brotli = require('brotli-webpack-plugin');
const analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      PORT: JSON.stringify(process.env.PORT || 3000)
    }),
    new brotli({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new analyzer({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    })
  ],
  devtool: 'source-map'
});
