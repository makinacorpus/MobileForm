'use strict';

angular.module('mf.layout', ['ui.router'])
	.config(require('./routes').layoutRoutes);