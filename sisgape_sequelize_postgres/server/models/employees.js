'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    cpf: DataTypes.STRING,
    nome: DataTypes.STRING,
    data_nasc: DataTypes.DATE,
    sexo: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cep: DataTypes.STRING,
    complemento: DataTypes.STRING,
    numero: DataTypes.STRING,
    uf: DataTypes.STRING,
    idDep: DataTypes.INTEGER
  }, {});
  Employees.associate = function(models) {
    this.hasMany(models.Loans, {
      foreignKey: "employeeID",
      as: "employeeLoans"
    })
    this.belongsTo(models.Departments, {
      foreignKey: "depID",
      onDelete: "CASCADE"
    })
  };
  return Employees;
};