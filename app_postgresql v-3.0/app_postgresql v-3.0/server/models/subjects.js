'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subjects = sequelize.define('Subjects', {
    descricao: DataTypes.STRING
  }, {});
  Subjects.associate = function(models) {
    this.hasMany(models.SubjectWorks, {
      foreignKey: "subjectID",
      as: "Work"
    })
  };
  return Subjects;
};