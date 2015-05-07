'use strict';

function getData(url,$http) {
	return $http['get'](url);
}

function putData(url,data,$http) {
	return $http['put'](url, data);
}

function deleteData(url,$http) {
	return $http['delete'](url);
}

function daybedService($http,$q) {

	this.get = function(url) {
		var deferred = $q.defer();
		getData(url,$http)
			.success(function(data, status, headers, config) {
				deferred.resolve(data); // Return
			})
			.error(function(data, status, headers, config) {
				deferred.reject('daybedService error with get()');
			});
		return deferred.promise;
	};

	this.put = function(url,data) {
		var deferred = $q.defer();
		putData(url,data,$http)
			.success(function(data, status, headers, config) {
				deferred.resolve(data); // Return
			})
			.error(function(data, status, headers, config) {
				deferred.reject('daybedService error with put()');
			});
		return deferred.promise;
	};

	this.del = function(url) {
		var deferred = $q.defer();
		deleteData(url,$http)
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