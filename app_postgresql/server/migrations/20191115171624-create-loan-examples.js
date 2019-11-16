'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('LoanExamples', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_devo: {
        type: Sequelize.DATE
      },
      data_prev: {
        type: Sequelize.DATE
      },
      loanID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Loans",
          key: "id",
          as: "loanID"
        }
      },
      exampleID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Examples",
          key: "id",
          as: "exampleID"
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
    return queryInterface.dropTable('LoanExamples');
  }
};