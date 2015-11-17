const PATH = require('path');

const gulp = require('gulp');
const browserSync = require('browser-sync');

const ROOT = '../../';

const PUBLIC_FOLDER = PATH.resolve(__dirname, ROOT, 'app/public/');

gulp.task('server', function() {
    browserSync.init({
        browser: [],
        notify: false,
        online: false,
        logConnections: true,
        files: [
           PUBLIC_FOLDER
        ],
        proxy: "http://localhost:6001"
    });

    browserSync.reload();
});