'use strict';

var
    gulp = require('gulp'),
    protractor = require('gulp-protractor').protractor,
    webdriverUpdate = require('gulp-protractor').webdriver_update,
    browserSync = require('browser-sync'),
    path = require('path'),
    testConfig = require('../config').e2e;

gulp.task('webdriver-update', webdriverUpdate);

gulp.task('e2e', ['browserSync:e2e'], function () {

    return gulp.src(testConfig.specs)
        .pipe(protractor({
                             configFile: path.join(__dirname, testConfig.protractor)
                         }))
        .on('error', function (err) {
                // Make sure failed tests cause gulp to exit non-zero
                throw err;
            })
        .on('end', function () {
                setTimeout(function () {
                    browserSync.exit();
                }, 1000);
            });
});
