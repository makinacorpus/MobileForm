'use strict';

function FormController($scope, daybedService, Restangular) {
	// Default value
	$scope.url = 'http://localhost:8000/v1/models/test1';

	$scope.get = function() {
		daybedService.get($scope.url).then(
			function(greeting){
				console.log('[Get] Success');
				console.log(greeting);
				$scope.data = JSON.stringify(greeting,null,"  "); // Formatting and indentation
			},
			function(reason){
				console.error('[Get] Failed');
				console.error(reason);
			}
		);
	};

	$scope.send = function() {
		daybedService.put($scope.url,$scope.data).then(
			function(greeting){
				console.log('[Send] Success');
				console.log(greeting);
			},
			function(reason){
				console.error('[Send] Failed');
				console.error(reason);
			}
		);
	}

	$scope.delete = function() {
		daybedService.del($scope.url).then(
			function(greeting){
				console.log('[Delete] Success');
				console.log(greeting);
			},
			function(reason){
				console.error('[Delete] Failed');
				console.error(reason);
			}
		);
	}
}

module.exports = {
	FormController: FormController
};