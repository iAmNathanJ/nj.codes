const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

module.exports = async (css) => {
  return await postcss([autoprefixer]).process(css);
};
