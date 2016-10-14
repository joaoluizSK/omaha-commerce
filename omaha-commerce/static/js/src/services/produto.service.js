app.service('ProdutoService', ProdutoService);

ProdutoService.$inject = ['$http'];

function ProdutoService($http) {

    var salvar = function(produto) {

        $http.post('/produto/salvar', produto);

    }

    var atualizar = function(produto) {

        $http.put('/produto/atualizar', produto);

    }

    var remover = function(produto) {

        $http.delete('/produto/remover', produto);

    }

    var consultarTodos = function() {

        return $http.get('/produto/consultarTodos');

    }

    var consultarPorId = function(id) {

        return $http.get('/produto/consultarPorId/{id}', id);

    }

    return {
        salvar: salvar,
        atualizar: atualizar,
        remover: remover,
        consultarTodos: consultarTodos,
        consultarPorId: consultarPorId
    }

};
