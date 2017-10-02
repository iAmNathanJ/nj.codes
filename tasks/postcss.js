const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

module.exports = async function(css) {
  return await postcss([autoprefixer]).process(css);
};
