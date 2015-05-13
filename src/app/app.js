'use strict';

var dependencies = [
	// OUR SUBMODULES
	'mf.layout',
	'mf.daybed',
	'mf.form',
	'mf.resourceTypes',

	// EXTERNAL STUFFS
	'moondash',
	'ui.router'
];

angular.module('mobileform', dependencies);

// REQUIRE APP COMPONENTS
require('./layout');
require('./daybed');
require('./form');
require('./resourceTypes');

