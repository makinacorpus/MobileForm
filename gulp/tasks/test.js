var gulp = require('gulp');

gulp.task('test', [
    'checker',
    'unit',
    'midway',
    'e2e'
]);
