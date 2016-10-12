var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/login', {
        templateUrl: 'login.html',
        contoller: 'LoginController'
    });

    $routeProvider.when('/usuario', {
        templateUrl: 'usuario.html',
        contoller: 'UsuarioController',
        controlerAs: 'uc'
    });

    $routeProvider.when('/produto', {
        templateUrl: 'produto.html',
        contoller: 'ProdutoController',
        controlerAs: 'pc'
    });

    $routeProvider.when('/categoria', {
        templateUrl: 'categoria.html',
        contoller: 'CategoriaController',
        controlerAs: 'cc'
    });

    $routeProvider.when('/venda', {
        templateUrl: 'venda.html',
        contoller: 'VendaController',
        controlerAs: 'vc'
    });

    $routeProvider.when('/loja', {
        templateUrl: 'loja.html',
        contoller: 'LojaController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });

});
