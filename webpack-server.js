const webpack = require('webpack');
const { resolve } = require('path');

module.exports = (env, argv) => ({
  target: 'node',
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
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'node-fetch'
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      PORT: JSON.stringify(process.env.PORT || 3000)
    })
  ],
  devtool: 'source-map'
});
