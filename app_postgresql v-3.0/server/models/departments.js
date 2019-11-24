'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departments = sequelize.define('Departments', {
    descricao: DataTypes.STRING
  }, {});
  Departments.associate = function(models) {
    this.hasMany(models.Employees, {
      foreignKey: "depID",
      as: "Employee"
    })
  };
  return Departments;
};