app.controller('IndexController', IndexController);

IndexController.$inject = ['$scope', 'IndexService', '$location'];

function IndexController($scope, indexService, $location) {

    $scope.usuario = {
        nome: 'Wesley Fuchter',
        tipo: 'A'
    };

    $scope.categorias = [{
        descricao: 'Camisetas de Jogo'
    }, {
        descricao: 'Equipamentos'
    }, {
        descricao: 'Bolas'
    }, {
        descricao: 'Camisetas Casuais'
    }];

};
