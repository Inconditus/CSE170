var app = angular. module('groupBuy',[]);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('SignUp', {
				templateUrl: 'frontend/index.html'
				controller: 'signInController'
			}).
			when('Login', {
				templateUrl: 'frontend/index.html'
				controller: 'signInController'
			}).
			when('Listings', {
				templateUrl: 'frontend/items.html'
				controller: 'listingsController'
			}).
			when('ViewProfile', {
				templateUrl: 'frontend/profile.html'
				controller: 'profileController'
			}).
			when('EditProfile', {
				templateUrl: 'frontend/editprofile.html'
				contorller: 'profileController'
			}).
			when('AddItem', {
				templateUrl: 'frontend/add.html'
				controller: 'itemController'
			}). otherwise({
				redirectTo: '/Listings'
			});
}]);