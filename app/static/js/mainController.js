var app = angular.module('app',[]);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/SignUp', {
				templateUrl: 'index.html',
				controller: 'signInController'
			}).
			when('/Login', {
				templateUrl: 'index.html',
				controller: 'signInController'
			}).
			when('/Listings', {
				templateUrl: 'add.html',
				controller: 'listingsController'
			}).
			when('/ViewProfile', {
				templateUrl: 'views/profile.html',
				controller: 'profileController'
			}).
			when('/EditProfile', {
				templateUrl: 'views/editprofile.html',
				controller: 'profileController'
			}).
			when('/BuyNow', {
				templateUrl: 'singleitem.html',
				controller: 'buyController'
			}).
			when('/AddItem', {
				templateUrl: 'add.html',
				controller: 'itemController'
			}). 
			otherwise({
				redirectTo: '/Listings'
			});
}]);

app.controller('signInController', function($scope) {
     
    $scope.message = 'Sing in';
     
});

app.controller('listingsController', function($scope) {
     
    $scope.message = 'TList';
     
});

app.controller('profileController', function($scope) {
     
    $scope.message = 'prfile';
     
});

app.controller('buyController', function($scope) {
     
    $scope.message = 'Tbuy';
     
});

app.controller('itemController', function($scope) {
     
    $scope.message = 'itrm';
     
});