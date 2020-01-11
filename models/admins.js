'use strict';
module.exports = (sequelize, DataTypes) => {
  const admins = sequelize.define('admins', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  admins.associate = function (models) {
    // associations can be defined here
    admins.hasMany(models.tickets, {
      as: 'adminId',
      foreignKey: 'admin_id'
    })
  };
  return admins;
};