var
    gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    config = require('../config').checker;

gulp.task('checker', function () {
    return gulp.src(config.src)
        .pipe(eslint())
        .pipe(eslint.format());
});
