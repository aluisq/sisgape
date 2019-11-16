'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    depID: DataTypes.INTEGER,
    data_nasc: DataTypes.DATE,
    sexo: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cep: DataTypes.STRING,
    complemento: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    uf: DataTypes.STRING,
    password: DataTypes.INTEGER
  }, {});
  Employees.associate = function(models) {
    this.hasMany(models.Loans, {
      foreignKey: "employeeID",
      as: "Loan"
    })
    this.belongsTo(models.Departments, {
      foreignKey: "depID",
      onDelete: "CASCADE"
    })
  };
  return Employees;
};