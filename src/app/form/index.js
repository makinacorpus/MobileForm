'use strict';

var angular = require('angular');

angular.module('mf.form', ['restangular'])
	.controller('FormController', require('./controllers').FormController)
	.directive('jsonConsole', require('./directives').formDirective)
	.run(require('./formMenu').formMenu);