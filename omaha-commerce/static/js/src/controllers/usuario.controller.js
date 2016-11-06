app.controller('UsuarioController', UsuarioController);

UsuarioController.$inject = ['$scope', 'UsuarioService', '$location'];

function UsuarioController($scope, usuarioService, $location) {

    var usuarios = [];

    var uc = this;

    uc.usuarios = usuarios;

    var idUsuario = sessionStorage.getItem("idUsuario");

    uc.usuarioSessao = {};

    if (idUsuario) {
      indexService.buscaUsuarioLogado(idUsuario).then(function(response) {
        uc.usuarioSessao = response.data;
      });
    }

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
        "TO"
    ];

    uc.estados = estados;

    uc.salvar = function() {
      if (uc.usuario.id) {
        usuarioService.atualizar(uc.usuario).then(function(response) {
          alert("Usuário atualizado com sucesso!");
          usuarioService.consultarPorId(uc.usuario.id).then(function(response) {
            uc.usuario = response.data;
          });
        }).catch(function(response) {
          alert("Erro ao atualizar usuário!");
        });
      } else {
        usuarioService.salvar(uc.usuario).then(function(response) {
          uc.usuario = response.data;
          alert("Usuário salvo com sucesso!");
        }).catch(function(response) {
          alert("Erro ao salvar usuário!");
        });
      }
    }

    uc.novo = function() {
      uc.usuario = {};
    }

    uc.remover = function(usuario) {
      usuarioService.remover(usuario).then(function(response) {
        uc.usuario = {};
        alert("Usuário removido com sucesso!");
      }).catch(function(response) {
        alert("Erro ao remover usuário!");
      });
    }

    uc.editar = function(usuarioEditar) {
      uc.usuario = usuarioEditar;
      $('#myModal').modal('hide');
    }

    uc.consultarTodos = function() {
      usuarioService.consultarTodos().then(function(response) {
        uc.usuarios = response.data;
      }).catch(function(response) {
        console.log("Erro ao buscar usuários.");
        uc.usuarios = [];
      });
    }

};
