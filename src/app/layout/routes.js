'use strict';

var controller = require('./controllers');

function layoutRoutes($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('layout', {
			abstract: true,
			url: '/',
			template: require('./templates/layout.html'),
			controller: controller.LayoutController
		});
}

module.exports = {
	layoutRoutes: layoutRoutes
};