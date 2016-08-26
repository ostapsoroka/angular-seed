//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'view*/**/*.js',
      'services/imgurService.js',
      'services/imgurService_test.js',
      
    ],

    autoWatch: true,

    frameworks: ['jasmine'],
    customLaunchers: {
      chrome_remote_debug: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9222']
      }
    },
    browsers: ['chrome_remote_debug'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
    ],
    logLevel: config.LOG_DEBUG,
    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    client: {
      captureConsole: true
    }
  });
};
