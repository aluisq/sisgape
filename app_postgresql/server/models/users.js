'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    nome: DataTypes.STRING,
    cpf: DataTypes.BIGINT,
    data_nasc: DataTypes.DATE,
    sexo: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    complemento: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    uf: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    this.hasMany(models.Loans, {
      foreignKey: "userID",
      as: "Loan"
    })
  };
  return Users;
};