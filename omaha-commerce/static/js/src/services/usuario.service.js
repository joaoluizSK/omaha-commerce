app.service('UsuarioService', UsuarioService);

UsuarioService.$inject = ['$http'];

function UsuarioService($http) {

  var salvar = function(usuario) {

    $http.post('/usuario/salvar',usuario);

  }

  return {salvar : salvar}

};
