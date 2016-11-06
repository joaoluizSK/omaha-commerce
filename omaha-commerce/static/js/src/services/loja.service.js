app.service('LojaService', LojaService);

LojaService.$inject = ['$http','CategoriaService','ProdutoService'];

function LojaService($http, categoriaService, produtoService) {

  var buscaCategorias = function() {
    return categoriaService.consultarTodos();
  }

  var buscaProdutos = function() {
    return produtoService.consultarTodos();
  }

  return {buscaCategorias : buscaCategorias,
          buscaProdutos : buscaProdutos}

};
