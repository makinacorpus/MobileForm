'use strict';

angular.module('mf.resourceTypes', [])
	.run(['MdRTypes', function(MdRTypes) {
		MdRTypes.parser = function(data){
			return data.models;
		};
	}]);
