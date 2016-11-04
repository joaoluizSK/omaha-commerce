app.service('UsuarioService', UsuarioService);

UsuarioService.$inject = ['$http'];

function UsuarioService($http) {

  var salvar = function(usuario) {

    $http.post('/usuario/salvar',usuario);

  }

  var atualizar = function(usuario) {

    $http.put('/usuario/atualizar',usuario);

  }

  var remover = function(usuario) {

    $http.delete('/usuario/remover',usuario);

  }

  var consultarTodos = function() {

    return $http.get('/usuario/consultarTodos');

  }

  var consultarPorId = function(id) {

    var usuarioRetorno;

    $http.get('/usuario/consultarPorId/{id}',id).success(function(data, status, headers, config) {

      usuarioRetorno = data;

    }).error(function(data, status, headers, config) {

    });

    return usuarioRetorno;

  }

  return {salvar : salvar,
          atualizar : atualizar,
          remover : remover,
          consultarTodos : consultarTodos,
          consultarPorId : consultarPorId}

};
