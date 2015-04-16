'use strict';

function FormController($scope, $http) {
$scope.data = '{\n'
            +'    "description": "A list of my stuff to do",\n'
            +'    "fields": [\n'
            +'        {\n'
            +'            "label": "The item",\n'
            +'            "name": "item",\n'
            +'            "type": "string"\n'
            +'        },\n'
            +'        {\n'
            +'            "choices": [\n'
            +'                "done",\n'
            +'                "todo"\n'
            +'            ],\n'
            +'            "label": "is it done or not",\n'
            +'            "name": "status",\n'
            +'            "type": "enum"\n'
            +'        }\n'
            +'    ],\n'
            +'    "title": "todo"\n'
            +'}';

	$scope.send = function() {
		$http.put('http://localhost:8000/v1/models/test', angular.copy($scope.data)).
			error(function(data, status, headers, config) {
				console.log(status);
			});
	}
}

module.exports = {
	FormController: FormController,
};