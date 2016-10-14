app.controller('ProdutoController', ProdutoController);

ProdutoController.$inject = ['$scope', 'ProdutoService', '$location'];

function ProdutoController($scope, produtoService, $location) {

    var produtos = [{

    }];

    var pc = this;

    pc.produtos = produtos;

    uc.salvar = function() {

    }

    pc.novo = function() {

        pc.produto = {};

    }

    pc.remover = function() {

        produtoService.remover(pc.produto);

    }

    pc.editar = function(produtoEditar) {

        pc.produto = produtoEditar;
        $('#myModal').modal('hide');

    }

    pc.consultarTodos = function() {

        pc.produtos = produtoService.consultarTodos();

    }

    pc.init = function() {

        console.log("Entrou");

    }

    pc.listar = function() {

    }

};
