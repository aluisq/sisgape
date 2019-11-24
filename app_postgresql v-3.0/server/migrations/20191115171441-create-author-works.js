'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AuthorWorks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      authorID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Authors",
          key: "id",
          as: "authorID"
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
    return queryInterface.dropTable('AuthorWorks');
  }
};