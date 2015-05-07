var gulp = require('gulp');

gulp.task('build', [
    'browserify',
    'icons',
    'vendors'
]);
