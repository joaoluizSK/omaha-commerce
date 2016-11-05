app.controller('CategoriaController', CategoriaController);

CategoriaController.$inject = ['$scope', 'CategoriaService', '$location'];

function CategoriaController($scope, categoriaService, $location) {

    var categorias = [];

    var cc = this;

    cc.categorias = categorias;

    cc.salvar = function() {
      if (cc.categoria.id) {
        categoriaService.atualizar(cc.categoria).then(function(response) {
          alert("Categoria atualizada com sucesso!");
          categoriaService.consultarPorId(cc.categoria.id).then(function(response) {
            cc.categoria = response.data;
          });
        }).catch(function(response) {
          alert("Erro ao atualizar categoria!");
        });
      } else {
        categoriaService.salvar(cc.categoria).then(function(response) {
          cc.categoria = response.data;
          alert("Categoria salva com sucesso!");
        }).catch(function(response) {
          alert("Erro ao salvar categoria!");
        });
      }
    }

    cc.novo = function() {
      cc.categoria = {};
    }

    cc.remover = function(categoria) {
      categoriaService.remover(categoria).then(function(response) {
        cc.categoria = {};
        alert("Categoria removida com sucesso!");
      }).catch(function(response) {
        alert("Erro ao remover categoria!");
      });
    }

    cc.editar = function(categoriaEditar) {
      cc.categoria = categoriaEditar;
      $('#myModal').modal('hide');
    }

    cc.consultarTodos = function() {
      categoriaService.consultarTodos().then(function(response) {
        cc.categorias = response.data;
      }).catch(function(response) {
        console.log("Erro ao buscar categorias.");
        cc.categorias = [];
      });
    }

};
