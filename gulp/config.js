var distMode = (process.argv.slice(2).indexOf('--dist') >= 0);
var vendorsMode = (process.argv.slice(2).indexOf('--vendors') >= 0);
var dest = './src',
		src = './src',
		appFolder = 'app';


module.exports = {
		// unit: {
		//     tests: ['src/**/test/unit/*.js'],
		//     src: ['src/*/*.js']
		// },
		buildMode: {
		    dist: distMode,
		    vendors: vendorsMode
		},
		browserSync: {
				server: {
						// Serve up our build folder
						baseDir: dest
				}
		},
		sass: {
		    src: src + '/' + appFolder + '/mobileform.{sass,scss}',
		    dest: dest,
		    toWatch: src + '/' + appFolder + '/**/*.scss',
		    settings: {
		        // Required if you want to use SASS syntax
		        // See https://github.com/dlmanning/gulp-sass/issues/81
		        sourceComments: 'map',
		        imagePath: '/images' // Used by the image-url helper
		    }
		},
		vendors: {
				debug: true,
				outputName : 'mobileform-vendors.js',
				dest: dest,
				dist_ignore: [
						"angular-mocks"
				]
		},
		browserify: {
				debug: true,
				// A separate bundle will be generated for each
				// bundle config in the list below
				bundleConfigs: [
						{
								entries: src + '/' + appFolder + '/app.js',
								dest: dest,
								outputName: 'mobileform.js'
						}
				]
		},
};