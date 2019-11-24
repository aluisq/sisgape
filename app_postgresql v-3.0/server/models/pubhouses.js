'use strict';
module.exports = (sequelize, DataTypes) => {
  const PubHouses = sequelize.define('PubHouses', {
    nome: DataTypes.STRING,
    cnpj: DataTypes.BIGINT
  }, {});
  PubHouses.associate = function(models) {
    this.hasMany(models.Works, {
      foreignKey: "pubID",
      as: "Work"
    })
  };
  return PubHouses;
};