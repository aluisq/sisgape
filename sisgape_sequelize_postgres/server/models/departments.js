'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departments = sequelize.define('Departments', {
    description: DataTypes.STRING
  }, {});
  Departments.associate = function(models) {
    this.hasMany(models.Employees,{
      foreignKey: "depID",
      as: "depEmployees"
    })
  };
  return Departments;
};