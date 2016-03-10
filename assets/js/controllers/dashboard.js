app.controller('DashboardController',
  ['$window', '$scope', '$rootScope', '$interval', 'colorService', '$http', 'angularLoad', '$timeout',
  function($window, $scope, $rootScope, $interval, colorService, $http, angularLoad, $timeout){

  $rootScope.pageTitle = 'Homepage';

	$scope.$watch('loaded', function(newVal, oldVal){
    if(newVal === true)
    {
      $timeout(function(){
        angularLoad.loadScript('js/functions.js').then(function() {
          console.log('script loaded');
        }).catch(function() {
          console.log('error loading script!');
        });
      }, 2000)
    }
  })	
  
  $http.get('http://admin.skynatures.com/products')
	.success(function(data){
		console.log(data);
		$scope.products = data;
    $scope.loaded = true;
	})
	.error(function(){
	});

}]);
