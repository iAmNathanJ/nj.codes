const chokidar = require('chokidar');
const css = require('./css');
const copy = require('./copy');

chokidar.watch('./src/scss/**/*.scss')
.on('change', css)
.on('error', console.log);

chokidar.watch('./src/images/**/*')
.on('change', copy);
