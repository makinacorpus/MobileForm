'use strict';

var controller = require('./controllers');

function layoutRoutes($stateProvider, $urlRouterProvider) {
	console.log('layoutRoutes ok')

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('layout', {
			abstract: true,
			url: '/',
			template: require('./templates/layout.html'),
			controller: controller.LayoutController
		})
		.state('layout.home', {
			url: '',
			views: {
				'header' : {
					template: require('./templates/header.html')
				},
				'content' : {
					template: require('./templates/content.html')
				}
			}
		});
}

module.exports = {
	layoutRoutes: layoutRoutes
};