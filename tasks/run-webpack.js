const webpack = require('webpack');
const standard = require('../webpack.config.standard');
const future = require('../webpack.config.future');

const compiler = webpack([ future, standard ]);

compiler.watch({}, function(err, { stats }) {
  stats.forEach(stat => console.log(stat.toString({ colors: true })));
});
