sequelize
    .sync({
        force: true
    })
    .then(function(err) {
        console.log('Sucesso ao sincronizar base de dados!');
    }, function(err) {
        console.log('Erro ao sincronizar base de dados!:', err);
    });
