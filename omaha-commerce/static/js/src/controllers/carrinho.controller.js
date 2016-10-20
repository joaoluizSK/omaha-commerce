app.controller('CarrinhoController', CarrinhoController);

CarrinhoController.$inject = ['$scope', 'CarrinhoService', '$location'];

function CarrinhoController($scope, carrinhoService, $location) {

    var produtos = [{
      descricao: 'Produto 1',
      valorUnitario: 10,
      quantidade: 2
    },{
      descricao: 'Produto 2',
      valorUnitario: 20,
      quantidade: 5
    }];

    var cc = this;

    cc.produtos = produtos;

    cc.salvar = function() {

    }

    cc.novo = function() {

        cc.produto = {};

    }

    cc.remover = function(produtoParaRemover) {
      cc.totalPedido -= 50;
    }

    cc.consultarTodos = function() {

    }

    cc.init = function() {

        console.log("Entrou");

    }

    cc.calculaTotalProduto = function(produtoParaCalcular) {

      if (produtoParaCalcular) {
        return (produtoParaCalcular.valorUnitario * produtoParaCalcular.quantidade);
      }

    }

    cc.calculaTotalProdutos = function() {

      cc.totalPedido = 0;

      for (var i = 0; i < cc.produtos.length; i++) {
        cc.totalPedido += cc.calculaTotalProduto(produtos[i]);
      }

      return cc.totalPedido;
    }

    cc.calculaFrete = function() {
      return 0;
    }

    cc.calculaTotalPedido = function() {
      return cc.calculaFrete() + cc.calculaTotalProdutos();

    }

};
