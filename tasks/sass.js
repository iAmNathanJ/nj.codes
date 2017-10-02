const path = require('path');
const { writeFile } = require('fs');
const { read, write, mkdir } = require('../lib/io');
const sass = require('node-sass');
const postcss = require('./postcss');
const chalk = require('chalk');

// const HTML = './src/html/index.html';
const SCSS = './src/scss/main.scss';
const DEST = './dist/css/main.css';

function compileSass(src, options = {}) {
  return new Promise((resolve, reject) => {
    sass.render({ file: path.resolve(src), ...options }, (err, result) => {
      if (err) reject(sassErr);
      resolve(result.css.toString());
    });
  });
}

module.exports = async function() {
  // const [html, { css }] = await Promise.all([
  //   read(HTML),
  //   compileSass(SCSS, { outputStyle: 'compressed' }).then(postcss)
  // ]);

  // const [head, tail] = html.split('/*** inject css ***/');
  // const injected = [head, css, tail].join('');

  // await write(DEST, injected);
  // console.log(chalk.blue(`[CSS] injected into ${DEST}`));

  const options = { outputStyle: 'compressed' };
  const { css } = await compileSass(SCSS, options).then(postcss);
  await write(DEST, css);
  console.log(chalk.blue(`[CSS] written to ${DEST}`));
};
