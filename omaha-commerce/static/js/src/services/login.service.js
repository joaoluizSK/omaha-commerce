app.service('LoginService', LoginService);

LoginService.$inject = ['$http'];

function LoginService($http) {

  var logar = function(login) {
    return $http.post('/usuario/logar',login);
  }

  return {logar : logar}

};
