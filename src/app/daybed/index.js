'use strict';

var angular = require('angular');

angular.module('mf.daybed', [])
	.service('daybedService', require('./services').daybedService);