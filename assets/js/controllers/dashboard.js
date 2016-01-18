app.controller('DashboardController',
  ['$window', '$scope', '$rootScope', '$interval', 'colorService', '$http', 'angularLoad', '$timeout',
  function($window, $scope, $rootScope, $interval, colorService, $http, angularLoad, $timeout){

  $rootScope.pageTitle = 'Homepage';

		
	$timeout(function(){
		angularLoad.loadScript('js/functions.js').then(function() {
			console.log('script loaded');
		}).catch(function() {
			console.log('error loading script!');
		});
	})

}]);
