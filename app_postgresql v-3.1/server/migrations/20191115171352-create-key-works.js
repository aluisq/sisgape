'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('KeyWorks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      keyID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Keys",
          key: "id",
          as: "keyID"
        }
      },
      workID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Works",
          key: "id",
          as: "workID"
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
    return queryInterface.dropTable('KeyWorks');
  }
};