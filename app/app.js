(function() {
	'use strict';

	angular.module('pocAngular', [
		'ui.router'
		])
	.config(function($urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
	});
})();