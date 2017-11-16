const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const splitMq = require('postcss-split-mq');

module.exports = async (css) => {
  return await postcss([
    autoprefixer(),
    splitMq({
      outpath: './dist/css',
      files: [{
        name: 'wide.css',
        // everything over 414
        match: /min-width:\s*(4(1[5-9]|[2-9][0-9])|[5-9]\d{2}|1\d{3})(\.\d+)?px/
      }]
    })
  ]).process(css);
};
