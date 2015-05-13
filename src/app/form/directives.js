'use strict';

var controller = require('./controllers');

function jsonConsole() {
	return {
		restrict: 'E', // only matches element name, not attribute name or class name
		replace: true,
		templateUrl: 'app/form/templates/form-page.html',
		controller: controller.FormController
	};
}

module.exports = {
	jsonConsole: jsonConsole
};
