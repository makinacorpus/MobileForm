/* global global */

/* browserify task
 ---------------
 Bundle javascripty things with browserify!
 This task is set up to generate multiple separate bundles, from
 different sources, and to use Watchify when run from the default task.
 See browserify.bundleConfigs in gulp/config.js
 */

var
    browserify = require('browserify'),
    watchify = require('watchify'),
    partialify = require('partialify'),
    bundleLogger = require('../util/bundleLogger'),
    gulp = require('gulp'),
    handleErrors = require('../util/handleErrors'),
    source = require('vinyl-source-stream'),
//streamify = require('gulp-streamify'),
//uglify = require('gulp-uglify'),
    exorcist = require('exorcist'),
    config = require('../config').browserify;

gulp.task('browserify', function (callback) {

    var bundleQueue = config.bundleConfigs.length;

    var browserifyThis = function (bundleConfig) {

        var bundler = browserify({
                                     // Required watchify args
                                     cache: {},
                                     packageCache: {},
                                     fullPaths: false,
                                     // Specify the entry point of your app
                                     entries: bundleConfig.entries,
                                     // Add file extentions to make optional in your requires
                                     extensions: config.extensions,
                                     // exclude all externals
                                     bundleExternal: false,
                                     // Enable source maps!
                                     debug: config.debug
                                 })

            // Use partialify to allow Angular templates to be require()
            .transform(partialify);

        var reportFinished = function () {
            // Log when bundling completes
            bundleLogger.end(bundleConfig.outputName);

            if (bundleQueue) {
                bundleQueue--;
                if (bundleQueue === 0) {
                    // If queue is empty, tell gulp the task is complete.
                    // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
                    callback();
                }
            }
        };
        var bundle = function () {
            // Log when bundling starts
            bundleLogger.start(bundleConfig.outputName);

            return bundler
                .bundle()
                // Report compile errors
                .on('error', handleErrors)
                .pipe(exorcist(
                          bundleConfig.dest + '/maps/' + bundleConfig.outputName + '.map',
                          'maps/' + bundleConfig.outputName + '.map')
            )
                // Use vinyl-source-stream to make the
                // stream gulp compatible. Specifiy the
                // desired output filename here.
                .pipe(source(bundleConfig.outputName))
                // TODO: fix uglifying
                // .pipe(streamify(uglify()))
                // Specify the output destination
                .pipe(gulp.dest(bundleConfig.dest))
                .on('end', reportFinished);
        };

        if (global.isWatching) {
            // Wrap with watchify and rebundle on changes
            bundler = watchify(bundler);
            // Rebundle on update
            bundler.on('update', bundle);
        }

        return bundle();
    };

    // Start bundling with Browserify for each bundleConfig specified
    config.bundleConfigs.forEach(browserifyThis);
});
