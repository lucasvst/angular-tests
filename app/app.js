(function() {
    'use strict';

    angular.module('angularTests', [
        'ui.router',
        'api.users',
        'components.users'
    ])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    });
})();
