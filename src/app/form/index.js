'use strict';

angular.module('mf.form', [])
	.controller('FormController', require('./controllers').FormController)
	.directive('jsonConsole', require('./directives').jsonConsole)
	.run(require('./formMenu').formMenu);