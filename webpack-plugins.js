const webpack = require('webpack');
const manifest = require('webpack-manifest-plugin');
const brotli = require('brotli-webpack-plugin');
const analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const shared = (env) => [
  new webpack.DefinePlugin({
    ENV: JSON.stringify(env || 'development'),
    PORT: JSON.stringify(process.env.PORT || 3000)
  })
];

const client = (env) => {
  return [
    new manifest({
      map(entry) {
        if (/\.js(\.map)?$/.test(entry.path)) {
          return { ...entry, path: `/js/${entry.path}` };
        }
        if (/\.css(\.map)?$/.test(entry.path)) {
          return { ...entry, path: `/css/${entry.path}` };
        }
        return entry;
      }
    })
  ].concat(
    env === 'production' ? [
      new brotli({
        asset: '[path].br[query]',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.ModuleConcatenationPlugin()
    ] : [
      new analyzer({
        analyzerMode: 'static',
        defaultSizes: 'gzip',
        openAnalyzer: false,
        generateStatsFile: true,
        statsFilename: 'stats.json',
        statsOptions: null,
        logLevel: 'info'
      })
    ]
  );
};

const server = (env) => [
  new webpack.ProvidePlugin({
    fetch: 'node-fetch'
  })
];

module.exports = {
  client(env) {
    return [ ...shared(env), ...client(env) ];
  },
  server(env) {
    return [ ...shared(env), ...server(env) ];
  }
};
