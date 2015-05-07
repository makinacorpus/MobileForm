'use strict';

var controller = require('./controllers');

function formDirective() {
	return {
		restrict: 'E', // only matches element name, not attribute name or class name
		replace: true,
		templateUrl: 'app/form/templates/form-page.html',
		controller: controller.FormController
	};
}

module.exports = {
	formDirective: formDirective
};
