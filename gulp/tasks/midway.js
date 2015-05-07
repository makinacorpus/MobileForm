var
    gulp = require('gulp'),
    karma = require('karma-as-promised'),
    path = require('path'),
    testConf = require('../config').midway;

gulp.task('midway', ['build'], function () {
    return karma.server
        .start({
                   configFile: path.join(__dirname, testConf.karma),
                   singleRun: true
               });
});

gulp.task('midway:watch', function () {
    return karma.server
        .start({
                   configFile: path.join(__dirname, testConf.karma),
                   singleRun: true
               });
});
