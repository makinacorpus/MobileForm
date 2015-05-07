var
    browserSync = require('browser-sync'),
    gulp = require('gulp'),
    config = require('../config').browserSync;

gulp.task('browserSync', ['build'], function () {
    browserSync(config.dev);
});

gulp.task('browserSync:e2e', ['build'], function () {
    browserSync(config.e2e);
});
