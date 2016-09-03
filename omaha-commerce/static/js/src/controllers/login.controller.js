app.controller('LoginController', LoginController);

LoginController.$inject = ['$scope','LoginService', '$location'];

function LoginController($scope, loginService, $location) {

  $scope.logar = function() {
    var retornoLogin = loginService.logar($scope.login);
    if (retornoLogin) {
      
    }
  }

};
