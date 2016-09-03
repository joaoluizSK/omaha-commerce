app.service('LoginService', LoginService);

LoginService.$inject = ['$http'];

function LoginService($http) {

  var logar = function(login) {
    console.log(login.email);
    console.log(login.senha);

    var retornoLogin = $http.get('../loginResource/logar');

    return retornoLogin;

  }

  return {logar : logar}

};
