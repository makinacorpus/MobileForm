'use strict';

var angular = require('angular');

angular.module('mf.layout', ['ui.router'])
	.config(require('./routes').layoutRoutes);