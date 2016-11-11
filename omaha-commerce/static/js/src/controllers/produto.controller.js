app.controller('ProdutoController', ProdutoController);

ProdutoController.$inject = ['$scope', 'ProdutoService', '$location'];

function ProdutoController($scope, produtoService, $location) {

  var produtos = [];

  var pc = this;

  produtoService.listaCategorias().then(function(response) {
    pc.categorias = response.data;
  }).catch(function(response) {
    console.log("Erro ao buscar categorias!");
  });

  pc.produtos = produtos;

  pc.salvar = function() {
    if (pc.produto.id) {
      produtoService.atualizar(pc.produto).then(function(response) {
        alert("Produto atualizado com sucesso!");
        produtoService.consultarPorId(pc.produto.id).then(function(response) {
          pc.produto = response.data;
        });
      }).catch(function(response) {
        alert("Erro ao atualizar produto!");
      });
    } else {
      produtoService.salvar(pc.produto).then(function(response) {
        pc.produto = response.data;
        alert("Produto salvo com sucesso!");
      }).catch(function(response) {
        alert("Erro ao salvar produto!");
      });
    }
  }

  pc.novo = function() {
    pc.produto = {};
  }

  pc.remover = function(produto) {
    produtoService.remover(produto).then(function(response) {
      pc.produto = {};
      alert("Produto removido com sucesso!");
    }).catch(function(response) {
      alert("Erro ao remover produto!");
    });
  }

  pc.editar = function(produtoEditar) {
    pc.produto = produtoEditar;
    $('#myModal').modal('hide');
  }

  pc.consultarTodos = function() {
    produtoService.consultarTodos().then(function(response) {
      pc.produtos = response.data;
    }).catch(function(response) {
      console.log("Erro ao buscar produtos.");
      pc.produtos = [];
    });
  }

};
