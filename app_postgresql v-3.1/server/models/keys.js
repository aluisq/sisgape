'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keys = sequelize.define('Keys', {
    descricao: DataTypes.STRING
  }, {});
  Keys.associate = function(models) {
    this.hasMany(models.KeyWorks, {
      foreignKey: "keyID",
      as: "Work"
    })
  };
  return Keys;
};