'use strict';
module.exports = (sequelize, DataTypes) => {
  const AuthorWorks = sequelize.define('AuthorWorks', {
    authorID: DataTypes.INTEGER,
    workID: DataTypes.INTEGER
  }, {});
  AuthorWorks.associate = function(models) {
    this.belongsTo(models.Authors, {
      foreignKey: "authorID",
      onDelete: "CASCADE"
    }),
    this.belongsTo(models.Works, {
      foreignKey: "workID",
      onDelete: "CASCADE"
    })
  };
  return AuthorWorks;
};