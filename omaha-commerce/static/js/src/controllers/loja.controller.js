app.controller('LojaController', LojaController);

LojaController.$inject = ['$scope','LojaService', '$location'];

function LojaController($scope, lojaService, $location) {

  categorias = [];
  produtos = [];
  var lc = this;
  lc.categorias = categorias;
  lc.produtos = produtos;

  lojaService.buscaCategorias().then(function(response) {
    lc.categorias = response.data;
  });

  lojaService.buscaProdutos().then(function(response) {
    lc.produtos = response.data;
  });
  
};
