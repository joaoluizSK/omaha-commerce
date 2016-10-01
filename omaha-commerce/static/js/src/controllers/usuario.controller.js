app.controller('UsuarioController', UsuarioController);

UsuarioController.$inject = ['$scope','UsuarioService', '$location'];

function UsuarioController($scope, usuarioService, $location) {

  var uc = this;

  var estados = ["AC", 
                 "AL", 
                 "AM", 
                 "AP", 
                 "BA", 
                 "CE", 
                 "DF", 
                 "ES", 
                 "GO", 
                 "MA", 
                 "MT", 
                 "MS", 
                 "MG", 
                 "PA", 
                 "PB", 
                 "PR", 
                 "PE", 
                 "PI", 
                 "RJ", 
                 "RN", 
                 "RO", 
                 "RS", 
                 "RR", 
                 "SC", 
                 "SE", 
                 "SP", 
                 "TO"];

  uc.estados = estados;

  uc.salvar = function() {

    usuarioService.salvar(uc.usuario);

    uc.usuarios.push(uc.usuario);

  }

  uc.novo = function() {
        
    uc.usuario = {};

  }

  uc.remover = function() {
        
    usuarioService.remover(uc.usuario);

  }

  uc.editar = function(usuarioEditar) {

  	uc.usuario = usuarioEditar;

  }

  uc.consultarTodos = function() {

  	uc.usuarios = usuarioService.consultarTodos();

  }

  uc.init = function() {

  	console.log("Entrou");

  }

};