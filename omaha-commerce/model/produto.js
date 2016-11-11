var Sequelize = require('sequelize');

const Produto = sequelize.define('Produto', {
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
    },
    unitario: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    descricaoBreve: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    detalhes: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    categoria: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
  });

module.exports.produto = Produto;
