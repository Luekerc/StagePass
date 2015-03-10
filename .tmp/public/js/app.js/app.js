angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	// $locationProvider.html5Mode(true);

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	})
	.state('login', {
		url: '/user/login',
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
	})
	.state('spaceregister', {
		url: '/user/spaceregister',
		templateUrl: 'templates/spaceregister.html',
		controller: 'SpaceRegisterCtrl'
	})
		.state('master', {
		url: '/user/master',
		templateUrl: 'templates/master.html',
		controller: 'MasterCtrl'
	})
		.state('band', {
		url: '/user/band',
		templateUrl: 'templates/band.html',
		controller: 'BandCtrl'
	})
		.state('logout', {
		url: '/',
		templateUrl: '../views/homepage.ejs',
		controller: 'LogoutCtrl'
	})

	$urlRouterProvider.otherwise('/');
});