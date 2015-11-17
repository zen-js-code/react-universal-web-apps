const PATH = require('path');

const gulp = require('gulp');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemap = require('gulp-sourcemaps');

const ROOT = '../../';

const SCSS_SRC_FOLDER = PATH.resolve(__dirname, ROOT, 'app/scss/');
const SCSS_SRC_FILES = PATH.resolve(__dirname, ROOT, SCSS_SRC_FOLDER, '**/*.scss');
const SCSS_SRC_FILE = PATH.resolve(__dirname, ROOT, SCSS_SRC_FOLDER, 'style.scss');
const SCSS_BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'app/public/css/');

gulp.task('build:scss', function () {
    return gulp.src(SCSS_SRC_FILE)
        .pipe(changed(SCSS_BUILD_FOLDER, {extension: '.scss'}))
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())        
        .pipe(sourcemap.write())
        .pipe(gulp.dest(SCSS_BUILD_FOLDER));
});

gulp.task('build:watch:scss', ['build:scss'], function() {
    gulp.watch(SCSS_SRC_FILES, ['build:scss']);
});
