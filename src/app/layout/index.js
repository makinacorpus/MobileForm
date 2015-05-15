'use strict';

var angular = require('angular');

angular.module('mobileForm.layout', ['ui.router'])
	.config(require('./routes').layoutRoutes)
	.controller(require('./controllers').LayoutController);
