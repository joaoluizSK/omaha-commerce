var Sequelize = require('sequelize');

const Categoria = sequelize.define('Categoria', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
  });

module.exports.categoria = Categoria;
