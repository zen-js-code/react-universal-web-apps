const PATH = require('path');

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./tools/build', {recurse: false});

gulp.task('default', ['build:watch:scss', 'build:watch:app', 'lint:watch:app', 'server']);