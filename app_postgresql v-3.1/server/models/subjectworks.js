'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubjectWorks = sequelize.define('SubjectWorks', {
    subjectID: DataTypes.INTEGER,
    workID: DataTypes.INTEGER
  }, {});
  SubjectWorks.associate = function(models) {
    this.belongsTo(models.Subjects, {
      foreignKey: "subjectID",
      onDelete: "CASCADE"
    }),
    this.belongsTo(models.Works, {
      foreignKey: "workID",
      onDelete: "CASCADE"
    })
  };
  return SubjectWorks;
};