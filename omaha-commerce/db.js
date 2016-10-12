var Sequelize = require('sequelize');

sequelize = new Sequelize('omaha', 'root', 'after123', {
    dialect: "mysql",
    port: 3306,
    host: "omaha-db.cjfuk9hotdad.us-west-2.rds.amazonaws.com",
});

sequelize
    .authenticate()
    .then(function(err) {
        console.log('Conexão estabelecida com sucesso!');
    }, function(err) {
        console.log('Erro ao estabelecer conexão com o Banco de Dados.', err);
    });

module.export = sequelize;
