const { read, write } = require('../lib/io');
const sass = require('./sass');
const postcss = require('./postcss');
const chalk = require('chalk');

process.on('unhandledRejection', () => {});

const src = './src/scss/main.scss';
const dest = './dist/css/main.css';
const opts = { outputStyle: 'compressed' };

module.exports = async function() {
  const { css } = await sass(src, opts).then(postcss);
  await write(dest, css);
  console.log(chalk.blue(`[CSS] written to ${dest}`));
};
