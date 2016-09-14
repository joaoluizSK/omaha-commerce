app.controller('UsuarioController', UsuarioController);

UsuarioController.$inject = ['$scope','UsuarioService', '$location'];

function UsuarioController($scope, usuarioService, $location) {

  var uc = this;

  console.log(uc);

  uc.salvar = function() {

    usuarioService.salvar(uc.usuario);

  }

};
