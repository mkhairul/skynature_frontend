app.controller('MainController',
  ['$scope', '$animate', 'localStorageService', 'todoService', '$alert', '$timeout', '$rootScope', '$http',
  function($scope, $animate, localStorageService, todoService, $alert, $timeout, $rootScope, $http){

  $http.get('http://admin.skynatures.com/products')
	.success(function(data){
		console.log(data);
		$scope.products = data;
	})
	.error(function(){
	});
	
		
}]);
