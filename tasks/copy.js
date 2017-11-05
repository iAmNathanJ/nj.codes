const shell = require('shelljs');

module.exports = function () {
  shell.mkdir('-p', './dist/css');
  shell.mkdir('-p', './dist/images');
  shell.cp('-R', 'src/images/', './dist');
}
