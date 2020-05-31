'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Works', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      sub_titulo: {
        type: Sequelize.STRING
      },
      ano_pub: {
        type: Sequelize.DATE
      },
      edicao: {
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.INTEGER
      },
      pubID: {
        type: Sequelize.INTEGER,
        references: {
          model: "PubHouses",
          key: "id",
          as: "pubID"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Works');
  }
};