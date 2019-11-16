'use strict';
module.exports = (sequelize, DataTypes) => {
  const Loans = sequelize.define('Loans', {
    userID: DataTypes.INTEGER,
    employeeID: DataTypes.INTEGER
  }, {});
  Loans.associate = function(models) {
    this.belongsToMany(models.Examples, {
      through: "LoanExamples",
      foreignKey: "loanID",
      as: "Example"
    }),
    this.belongsTo(models.Users, {
      foreignKey: "userID",
      onDelete: "CASCADE"
    }),
    this.belongsTo(models.Employees, {
      foreignKey: "employeeID",
      onDelete: "CASCADE"
    })
  };
  return Loans;
};