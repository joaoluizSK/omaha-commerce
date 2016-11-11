app.controller('LojaController', LojaController);

LojaController.$inject = ['$scope','LojaService', '$location'];

function LojaController($scope, lojaService, $location) {

  categorias = [];
  produtos = [];
  var lc = this;
  lc.categorias = categorias;
  lc.produtos = produtos;
  lc.compra = {};
  console.log("oi");

  lojaService.buscaCategorias().then(function(response) {
    lc.categorias = response.data;
    lc.filtroCategoria = lc.categorias[0].id;
  });

  lojaService.buscaProdutos().then(function(response) {
    lc.produtos = response.data;
  });

  lc.seleciona = function(categoria) {
    lc.filtroCategoria = categoria.id;
  }

  lc.comprar = function(produtoAtual) {
    lc.compra.produto = produtoAtual;
  }

  $('#myModal').on('shown.bs.modal', function (e) {
    console.log(lc.compra.produto.nome);
  })

  lc.adicionarNoCarrinho = function(compra) {
    localStorage.setItem("carrinho",compra);
  }

};
