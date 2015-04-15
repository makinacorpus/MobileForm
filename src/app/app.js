'use strict';

var dependencies = [
  'mobileForm.layout',
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