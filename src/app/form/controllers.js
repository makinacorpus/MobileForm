'use strict';

function FormController($scope, $http, daybedService) {
	// Default value
	$scope.url = 'http://localhost:8000/v1/models/test';

	$scope.get = function(){
		daybedService.get($scope.url).then(
			function(greeting){
				console.log(greeting);
				$scope.data = JSON.stringify(greeting,null,"  "); // Formatting and indentation
			},
			function(reason){
				console.error(reason);
			}
		);
	};

	$scope.send = function(){
		daybedService.put($scope.url,$scope.data).then(
			function(greeting){
				console.log(greeting);
			},
			function(reason){
				console.error(reason);
			}
		);
	}

	$scope.delete = function(){
		daybedService.del($scope.url).then(
			function(greeting){
				console.log(greeting);
			},
			function(reason){
				console.error(reason);
			}
		);
	}
}

module.exports = {
	FormController: FormController,
};