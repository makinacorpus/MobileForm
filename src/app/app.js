'use strict';

var dependencies = [
	'mobileForm.layout',
	'mobileForm.form',
	// EXTERNAL STUFFS
	'ui.router',
	'ngResource'
];

var angular = require('angular');

// DEPENDENCIES
require('ui.router');
require('ngResource');

angular.module('mobileForm', dependencies);

require('./layout');
require('./form');