app.controller('IndexController', IndexController);

IndexController.$inject = ['$scope', 'IndexService', '$location'];

function IndexController($scope, indexService, $location) {

  usuario = {}
  var ic = this;
  ic.usuario = usuario;

  ic.init = function() {
    var idUsuario = sessionStorage.getItem("idUsuario");
    if (idUsuario) {
      indexService.buscaUsuarioLogado(idUsuario).then(function(response) {
        ic.usuario = response.data;
        $location.path('/loja');
      });
    } else {
      $location.path('/loja');
    }
  }

};
