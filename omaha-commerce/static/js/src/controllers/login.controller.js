app.controller('LoginController', LoginController);

LoginController.$inject = ['$scope','LoginService', '$location'];

function LoginController($scope, loginService, $location) {

  var lc = this;

  lc.logar = function() {
    loginService.logar(lc.login).then(function(response) {
      if(response.data.length > 0) {
        sessionStorage.setItem("idUsuario", response.data[0].id);
        $location.path('/loja');
      } else {
        alert("Dados inválidos!");
      }
    }).catch(function(response) {
      alert("Erro ao fazer login!");
    });
  }

};
