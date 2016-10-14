app.controller('CategoriaController', CategoriaController);

CategoriaController.$inject = ['$scope', 'CategoriaService', '$location'];

function ProdutoController($scope, categoriaService, $location) {

    var categorias = [{

    }];

    var cc = this;

    cc.categorias = categorias;

    cc.salvar = function() {

    }

    cc.novo = function() {

        cc.categoria = {};

    }

    cc.remover = function() {

        categoriaService.remover(cc.categoria);

    }

    cc.editar = function(categoriaEditar) {

        cc.categoria = categoriaEditar;
        $('#myModal').modal('hide');

    }

    cc.consultarTodos = function() {

        cc.categorias = categoriaService.consultarTodos();

    }

    cc.init = function() {

    }

    cc.listar = function() {

    }

};
