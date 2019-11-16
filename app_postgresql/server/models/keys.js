'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keys = sequelize.define('Keys', {
    descricao: DataTypes.STRING
  }, {});
  Keys.associate = function(models) {
    this.belongsToMany(models.Works, {
      through: "KeyWorks",
      foreignKey: "keyID",
      as: "Work"
    })
  };
  return Keys;
};