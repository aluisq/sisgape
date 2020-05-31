'use strict';
module.exports = (sequelize, DataTypes) => {
  const LoanExamples = sequelize.define('LoanExamples', {
    status: DataTypes.STRING,
    data_prev: DataTypes.DATE,
    loanID: DataTypes.INTEGER,
    exampleID: DataTypes.INTEGER
  }, {});
  LoanExamples.associate = function(models) {
    this.belongsTo(models.Loans,{
      foreignKey: "loanID",
      onDelete: "CASCADE"
    }),
    this.belongsTo(models.Examples, {
      foreignKey: "exampleID",
      onDelete: "CASCADE"
    })
  };
  return LoanExamples;
};