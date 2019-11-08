'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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
    uf: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    this.hasMany(models.Loans,{
      foreignKey: "userID",
      as: "userLoans"
    })
  };
  return Users;
};