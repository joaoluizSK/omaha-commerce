var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

	$routeProvider.when('/login', {
		templateUrl : 'login.html',
		contoller : 'LoginController'
	});

	$routeProvider.when('/loja', {
		templateUrl : 'loja.html',
		contoller : 'LojaController'
	});

	$routeProvider.otherwise ({ redirectTo: '/' });

});
