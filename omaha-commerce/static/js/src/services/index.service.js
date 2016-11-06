app.service('IndexService', IndexService);

IndexService.$inject = ['$http','CategoriaService','ProdutoService'];

function IndexService($http, categoriaService, produtoService) {

  var buscaCategorias = function() {
    return categoriaService.consultarTodos();
  }

  var buscaProdutos = function() {
    return produtoService.consultarTodos();
  }

  return {buscaCategorias : buscaCategorias,
          buscaProdutos : buscaProdutos}

};
