'use strict';

var controller = require('./controllers');

function layoutRoutes($stateProvider) {
	$stateProvider
		.state('site', {
			parent: 'root',
			url: '/',
			title: 'Home',
			views: {
				'md-content@root': {
					templateUrl: 'app/layout/templates/home.html'
				}
			}
		})
		.state('site.form', {
			parent: 'site',
			url: 'form',
			title: 'Form',
			views: {
				'md-content@root': {
					templateUrl: 'app/layout/templates/form.html'
				}
			}
		});
}

module.exports = {
	layoutRoutes: layoutRoutes
};