const chokidar = require('chokidar');
const sass = require('./sass');

chokidar.watch('./src/scss/**/*.scss').on('change', sass);
