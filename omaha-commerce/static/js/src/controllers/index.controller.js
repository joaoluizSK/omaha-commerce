app.controller('IndexController', IndexController);

IndexController.$inject = ['$scope', 'IndexService', '$location'];

function IndexController($scope, indexService, $location) {

  var ic = this;

  ic.usuario = {
      nome: 'Wesley Fuchter',
      tipo: 'A'
  };
  
  categorias = [];
  produtos = [];

  ic.categorias = categorias;
  ic.produtos = produtos;

  indexService.buscaCategorias().then(function(response) {
      ic.categorias = response.data;
  });

  indexService.buscaProdutos().then(function(response) {
      ic.produtos = response.data;
  });

};
