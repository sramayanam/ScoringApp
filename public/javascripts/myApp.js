var app = angular.module('myApp', ['ngRoute', 'ngResource']);
app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'main.html',
		controller: 'mainController'
	});
});


app.factory('postService', function ($resource) {
	return $resource(encodeURI('/api/score/:id1/:id2/:indate'),
		{ id1: parseInt('@id1'), id2: parseInt('@id2'), indate: '@indate' },
		{
			query: {
				method: 'GET',
				isArray: false
			}
		});
});

app.controller('mainController', function ($scope, $routeParams, postService) {
	$scope.data = { id1: 1, id2: 2, indate: '12/28/2013', score: '' };

	$scope.post = function () {
		$routeParams.id1 = $scope.data.id1;
		$routeParams.id2 = $scope.data.id2;
		$routeParams.indate = $scope.data.indate;
		postService.query(
			{
				id1: $scope.data.id1,
				id2: $scope.data.id2,
				indate: $scope.data.indate
			}
		).$promise.then(function (data) {
			$scope.data.score = data.Score;
		});
	}

});
