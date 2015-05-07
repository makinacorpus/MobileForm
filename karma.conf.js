'use strict';

module.exports = function (config) {
  config.set(
    {
      files: [
        'src/moondash-vendors.js',
        'src/moondash.js',
        'src/mobileform.js',
        'src/**/midway/*.js'
      ],
      frameworks: ['jasmine'],
      browsers: ['PhantomJS'],
      //reporters: ['dot'],
      reporters: ['progress', 'junit'],
      singleRun: false,
      autoWatch: true,

      logLevel: 'LOG_INFO'

    }
  );
};
