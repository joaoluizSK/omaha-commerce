app.service('IndexService', IndexService);

IndexService.$inject = ['$http','UsuarioService'];

function IndexService($http, usuarioService) {

  var buscaUsuarioLogado = function(idUsuario) {
    return usuarioService.consultarPorId(idUsuario);
  }

  return {buscaUsuarioLogado: buscaUsuarioLogado}

};
