var
    distMode = (process.argv.slice(2).indexOf('--dist') >= 0),
    dest = './src',
    src = './src',
    appFolder = 'app';
    // demoSrc = './demo';

exports.vendors = {
    src: [
        './node_modules/moondash/build/*',
        '!./node_modules/moondash/build/demo'
    ],
    dest: dest
};
exports.e2e = {
    protractor: '../../protractor.conf-travis.js',
    specs: [
        'src/**/test/e2e/*.js'
    ]
};
exports.unit = {
    tests: ['src/**/test/unit/*.js'],
    src: ['src/*/*.js']
};
exports.midway = {
    karma: '../../karma.conf.js'
};
exports.buildMode = {
    dist: distMode
};
exports.browserSync = {
    dev: {
        server: {
            // We're serving the src folder as well
            // for sass sourcemap linking
            baseDir: dest,
            //directory: true
        }
        // ,open: false,
        // files: [
        //     dest + '/**',
        //     // Exclude Map files
        //     '!' + dest + '/**.map'
        // ]
    },
    e2e: {
        port: 3001,
        server: {
            // We're serving the src folder as well
            // for sass sourcemap linking
            baseDir: ['.'],
            directory: true
        },
        open: false,
        files: [
            src + '/**',
            // Exclude Map files
            '!' + dest + '/**.map'
        ]
    }
};
exports.icons = {
    src: [
        './node_modules/ui-grid/dist/release/ui-grid.eot',
        './node_modules/ui-grid/dist/release/ui-grid.ttf',
        './node_modules/ui-grid/dist/release/ui-grid.woff',
        './node_modules/font-awesome/fonts/*',
        './node_modules/bootstrap/fonts/*'
    ],
    dest: dest + '/' + appFolder + '/fonts'
};
exports.browserify = {
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
};
exports.dist = {};
exports.checker = {
    src: ['src/*/*.js', '!src/mockapi/index.js']
};
