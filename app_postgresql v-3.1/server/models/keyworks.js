'use strict';
module.exports = (sequelize, DataTypes) => {
  const KeyWorks = sequelize.define('KeyWorks', {
    keyID: DataTypes.INTEGER,
    workID: DataTypes.INTEGER
  }, {});
  KeyWorks.associate = function(models) {
    this.belongsTo(models.Keys, {
      foreignKey: "keyID",
      onDelete: "CASCADE"
    }),
    this.belongsTo(models.Works, {
      foreignKey: "workID",
      onDelete: "CASCADE"
    })
  };
  return KeyWorks;
};