'use strict';

function hawkAuth($http) {
	// var user = {
	// 	'id': 'b58c69618870fd7ec46e60585c3372c147e791cd5795a880ec6519ce83c08c0b',
	// 	'key': '56cda841af268c99b63e38383a758e83e8f7225c591051c5855fdafc749aa01d'
	// };
	if(typeof user !== "undefined") {
		var authdata = btoa(user.id + ':' + user.key);
		$http.defaults.headers.common['Authorization'] = 'basic ' + authdata;
	}
}

function getData(url, config, $http) {
	hawkAuth($http);
	return $http['get'](url, config);
}

function putData(url, data, config, $http) {
	hawkAuth($http);
	return $http['put'](url, data, config);
}

function deleteData(url, config, $http) {
	hawkAuth($http);
	return $http['delete'](url, config);
}

function daybedService($http,$q) {

	this.get = function(url, config) {
		var deferred = $q.defer();
		getData(url, config, $http)
			.success(function(data, status, headers, config) {
				deferred.resolve(data); // Return
			})
			.error(function(data, status, headers, config) {
				deferred.reject('daybedService error with get()');
			});
		return deferred.promise;
	};

	this.put = function(url, data, config) {
		var deferred = $q.defer();
		putData(url,  data, config, $http)
			.success(function(data, status, headers, config) {
				deferred.resolve(data); // Return
			})
			.error(function(data, status, headers, config) {
				deferred.reject('daybedService error with put()');
			});
		return deferred.promise;
	};

	this.del = function(url, config) {
		var deferred = $q.defer();
		deleteData(url, config, $http)
			.success(function(data, status, headers, config) {
				deferred.resolve(data); // Return
			})
			.error(function(data, status, headers, config) {
				deferred.reject('daybedService error with del()');
			});
		return deferred.promise;
	};
}

module.exports = {
	daybedService: daybedService
};