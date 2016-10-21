var Sequelize = require('sequelize');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
  });

module.exports.usuario = Usuario;
