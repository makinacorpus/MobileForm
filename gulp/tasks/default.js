var
    gulp = require('gulp'),
    buildMode = require('../config').buildMode;

if (buildMode.dist) {
    gulp.task('default', ['dist']);
} else {
    gulp.task('default', ['webdriver-update', 'checker', 'unit', 'watch']);
}
