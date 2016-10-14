app.service('CategoriaService', CategoriaService);

CategoriaService.$inject = ['$http'];

function CategoriaService($http) {

    var salvar = function(categoria) {

        $http.post('/categoria/salvar', categoria);

    }

    var atualizar = function(categoria) {

        $http.put('/categoria/atualizar', categoria);

    }

    var remover = function(categoria) {

        $http.delete('/categoria/remover', categoria);

    }

    var consultarTodos = function() {

        return $http.get('/categoria/consultarTodos');

    }

    var consultarPorId = function(id) {

        return $http.get('/categoria/consultarPorId/{id}', id);

    }

    return {
        salvar: salvar,
        atualizar: atualizar,
        remover: remover,
        consultarTodos: consultarTodos,
        consultarPorId: consultarPorId
    }

};
