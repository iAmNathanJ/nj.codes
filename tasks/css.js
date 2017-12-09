const sass = require('./sass');
const postcss = require('./postcss');
const chalk = require('chalk');
const {
  read,
  write,
  writeWithHash,
  createCSSManifestEntry
} = require('../lib/io');

process.on('unhandledRejection', () => {});

const src = './src/scss/main.scss';
const dest = './dist/css/main.css';
const opts = { outputStyle: 'compressed' };

module.exports = async function() {
  const { css } = await sass(src, opts).then(postcss);
  const hashedFilename = await writeWithHash(dest, css);
  await createCSSManifestEntry(dest, hashedFilename);
  console.log(chalk.blue(`[CSS] written to ${dest}`));
};
