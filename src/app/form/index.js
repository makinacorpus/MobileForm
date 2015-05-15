'use strict';

var angular = require('angular');

angular.module('mobileForm.form', [])
	.controller(require('./controllers').FormController)
	.directive('myFirstForm', require('./directives').detailDirective)
	.service('daybedService', require('./services').daybedService);