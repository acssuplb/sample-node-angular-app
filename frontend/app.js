'use strict';

(function() {
	angular.module('app', ['ngRoute'])
			.config(router);

	function router($routeProvider) {
		$routeProvider
			.when('/post_todo', {
				templateUrl: 'views/post.html',
				controller: 'PostCtrl'
			})
			.otherwise({
				redirectTo: '/'
			})	
	}
})();