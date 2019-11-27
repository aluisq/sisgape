'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SubjectWorks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subjectID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Subjects",
          key: "id",
          as: "subjectID"
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
    return queryInterface.dropTable('SubjectWorks');
  }
};