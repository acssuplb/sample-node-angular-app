'use strict';

(() => {
	angular.module('app')
			.factory('PostService', PostService);

	PostService.$inject = ['$http', '$q'];

	const headers = {
	    'content-type': 'application/x-www-form-urlencoded'
	};

	function PostService($http, $q) {
		const service = {
			postTodo: postTodo
		}

		return service;

		function postTodo(data) {
			let deferred = $q.defer();

			$http({
				method: 'POST',
				data: $.param(data),
				url: '/todo',
				headers: headers
			})
			.then((res) => {
					console.log(res);
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}
})();