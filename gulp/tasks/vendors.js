var gulp = require('gulp'),
    config = require('../config').vendors;

gulp.task('vendors', function () {
    /* Nothing more than just a recursive copy */
    return gulp
        .src(config.src)
        .pipe(gulp.dest(config.dest));
});
