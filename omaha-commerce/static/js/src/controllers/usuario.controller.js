app.controller('UsuarioController', UsuarioController);

UsuarioController.$inject = ['$scope', 'UsuarioService', '$location'];

function UsuarioController($scope, usuarioService, $location) {

    var usuarios = [];

    var uc = this;

    uc.usuarios = usuarios;

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

        var usuarioRetorno = usuarioService.salvar(uc.usuario);

        console.log(usuarioRetorno.config.data);

        //uc.usuarios.push(uc.usuario);

    }

    uc.novo = function() {

        uc.usuario = {};

    }

    uc.remover = function() {

        usuarioService.remover(uc.usuario);

    }

    uc.editar = function(usuarioEditar) {

        uc.usuario = usuarioEditar;
        $('#myModal').modal('hide');

    }

    uc.consultarTodos = function() {

      usuarioService.consultarTodos().success(function(data, status, headers, config) {

        uc.usuarios = data;

      }).error(function(data, status, headers, config) {

        alert("Erro ao buscar usuário");

      });

    }

    uc.init = function() {

    }

    uc.listar = function() {

    }

};
