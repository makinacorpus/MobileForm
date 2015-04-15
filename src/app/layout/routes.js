'use strict';

var controller = require('./controllers');

function layoutRoutes($stateProvider, $urlRouterProvider) {
  console.log('layoutRoutes ok')

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('layout', {
			url: '/',
			template: require('./templates/layout.html'),
			controller: controller.LayoutController
		});
}

module.exports = {
	layoutRoutes: layoutRoutes
};