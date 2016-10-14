'use strict';

(() => {
	angular.module('app')
		.controller('PostCtrl', PostCtrl);

	function PostCtrl($scope, PostService) {
		$scope.post_todo = () => {

			const data = {
				name: $scope.name,
				details: $scope.details
			}

			PostService.postTodo(data);
		}
	}
})();