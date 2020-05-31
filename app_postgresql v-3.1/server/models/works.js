'use strict';
module.exports = (sequelize, DataTypes) => {
  const Works = sequelize.define('Works', {
    titulo: DataTypes.STRING,
    sub_titulo: DataTypes.STRING,
    ano_pub: DataTypes.DATE,
    edicao: DataTypes.STRING,
    volume: DataTypes.INTEGER,
    pubID: DataTypes.INTEGER
  }, {});
  Works.associate = function(models) {
    this.hasMany(models.Examples, {
      foreignKey: "workID",
      as: "Example"
    }),
    this.belongsTo(models.PubHouses, {
      foreignKey: "pubID",
      onDelete: "CASCADE"
    }),
    this.hasMany(models.KeyWorks, {
      foreignKey: "workID",
      as: "Keyword"
    }),
    this.hasMany(models.AuthorWorks, {
      foreignKey: "workID",
      as: "Author"
    }),
    this.hasMany(models.SubjectWorks, {
      foreignKey: "workID",
      as: "Subject"
    })
  };
  return Works;
};