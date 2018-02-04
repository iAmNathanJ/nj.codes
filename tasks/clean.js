const shell = require('shelljs');

module.exports = function () {
  shell.rm('-rf', './dist/')
}
