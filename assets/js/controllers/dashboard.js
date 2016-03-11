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
  
  $http.get('http://admin.skynatures.com/auth/user')
  .success(function(data){
    console.log(data);
  })
  
  $http.get('http://admin.skynatures.com/products')
	.success(function(data){
		console.log(data);
		$scope.products = data;
    $scope.loaded = true;
	})
	.error(function(){
	});
    
  $scope.login = {};
    
  $scope.manual_login = function(){
    console.log('login');
    $http.post('http://admin.skynatures.com/auth/manual_login', $scope.login)
    .success(function(data){
      $rootScope.logged_in = true;
      $scope.user_detail = data.user;
      console.log(data);
    })
    .error(function(data){
      console.log(data);
    })
  }
  
  $scope.main_images = true;
  
  $scope.viewDownline = function(){
    $scope.main_images = false;
    $scope.view_connections = true;
  }

}]);
