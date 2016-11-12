app.service('ProdutoService', ProdutoService);

ProdutoService.$inject = ['$http','CategoriaService'];

function ProdutoService($http, categoriaService) {

  var salvar = function(produto) {
    return $http.post('/produto/salvar',produto);
  }

  var atualizar = function(produto) {
    return $http.put('/produto/atualizar',produto);
  }

  var remover = function(produto) {
    return $http.delete('/produto/remover/'+produto.id);
  }

  var consultarTodos = function() {
    return $http.get('/produto/consultarTodos');
  }

  var consultarPorId = function(id) {
    return $http.get('/produto/consultarPorId/'+id)
  }

  var listaCategorias = function() {
    return categoriaService.consultarTodos();
  }

  return {
      salvar: salvar,
      atualizar: atualizar,
      remover: remover,
      consultarTodos: consultarTodos,
      consultarPorId: consultarPorId,
      listaCategorias : listaCategorias
    }

};
