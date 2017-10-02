const shell = require('shelljs');

shell.mkdir('-p', './dist/css');
shell.mkdir('-p', './dist/images');

shell.cp('-R', 'src/images/', './dist');
