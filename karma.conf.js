module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['jasmine'],

        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js',
            './node_modules/angular-mocks/angular-mocks.js',

            './app/testing/common.js',

            './app/services/users/users.js',
            './app/services/pokemon/pokemon.js',
            './app/components/users/users.js',
            './app/components/profile/profile.js',

            './app/app.js',

            './app/services/users/users.spec.js',
            './app/services/pokemon/pokemon.spec.js',
            './app/components/users/users.spec.js',
            './app/components/profile/profile.spec.js',
        ],

        exclude: [],
        preprocessors: {},
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chromium'],
        singleRun: false,
        concurrency: Infinity
    });
};
