var app = angular.module('myApp', ['ngRoute', 'ngResource']);
app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'main.html',
		controller: 'mainController'
	});
});

app.factory('postService', function ($resource) {
	return $resource('/api/score/:id1/:id2/:indate',
	 { id1: parseInt('@id1'), id2: parseInt('@id2'), indate: '@indate' },
	{
    query: {
      method: 'GET',
      isArray: false
	}
});
});

app.controller('mainController', function ($scope, $routeParams, postService) {
	$scope.data = { id1: 1, id2: 2, indate: '12/28/2013',score: '' };


	//$scope.params = $routeParams;
	$scope.post = function () {
		console.log("printing scope parameters", $scope.data.id1);
		console.log("printing scope parameters", $scope.data.id2);
		console.log("printing scope parameters", $scope.data.indate);
		$routeParams.id1 = $scope.data.id1;
		$routeParams.id2 = $scope.data.id2;
		$routeParams.indate = $scope.data.indate;
		console.log("printing route parameters", $routeParams.id1 + $routeParams.id2 + $routeParams.indate);
		postService.query({ id1: $scope.data.id1, id2: $scope.data.id2, indate: $scope.data.indate }).$promise.then(function(data) {
		$scope.data.score = data.Score;
		console.log("printing final score value:::::", data.Score);
		});
		//$scope.data.score = "Test ####";
		//, function (data) { $scope.data.score = data }
		
	}

});
