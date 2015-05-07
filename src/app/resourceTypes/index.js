'use strict';

var angular = require('angular');

angular.module('mf.resourceTypes', [])
	.run(['MdRTypes', function(MdRTypes) {
		MdRTypes.parser = function(data){
			return data.models;
		};
	}]);
