app.service('UsuarioService', UsuarioService);

UsuarioService.$inject = ['$http'];

function UsuarioService($http) {

  var salvar = function(usuario) {
    return $http.post('/usuario/salvar',usuario);
  }

  var atualizar = function(usuario) {
    return $http.put('/usuario/atualizar',usuario);
  }

  var remover = function(usuario) {
    return $http.delete('/usuario/remover/'+usuario.id);
  }

  var consultarTodos = function() {
    return $http.get('/usuario/consultarTodos');
  }

  var consultarPorId = function(id) {
    return $http.get('/usuario/consultarPorId/'+id)
  }

  return {salvar : salvar,
          atualizar : atualizar,
          remover : remover,
          consultarTodos : consultarTodos,
          consultarPorId : consultarPorId}

};
