app.service('CategoriaService', CategoriaService);

CategoriaService.$inject = ['$http'];

function CategoriaService($http) {

  var salvar = function(categoria) {
    return $http.post('/categoria/salvar',categoria);
  }

  var atualizar = function(categoria) {
    return $http.put('/categoria/atualizar',categoria);
  }

  var remover = function(categoria) {
    return $http.delete('/categoria/remover/'+categoria.id);
  }

  var consultarTodos = function() {
    return $http.get('/categoria/consultarTodos');
  }

  var consultarPorId = function(id) {
    return $http.get('/categoria/consultarPorId/'+id)
  }

  return {
      salvar: salvar,
      atualizar: atualizar,
      remover: remover,
      consultarTodos: consultarTodos,
      consultarPorId: consultarPorId
  }

};
