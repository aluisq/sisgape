'use strict';
module.exports = (sequelize, DataTypes) => {
  const Authors = sequelize.define('Authors', {
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {});
  Authors.associate = function(models) {
    this.hasMany(models.AuthorWorks, {
      foreignKey: "authorID",
      as: "Work"

    })
  };
  return Authors;
};