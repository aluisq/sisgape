'use strict';
module.exports = (sequelize, DataTypes) => {
  const Examples = sequelize.define('Examples', {
    descricao: DataTypes.STRING,
    workID: DataTypes.INTEGER
  }, {});
  Examples.associate = function(models) {
    this.belongsToMany(models.Loans, {
      through: "LoanExamples",
      foreignKey: "exampleID",
      as: "Loan"
    }),
    this.belongsTo(models.Works, {
      foreignKey: "workID",
      onDelete: "CASCADE"
    })
  };
  return Examples;
};