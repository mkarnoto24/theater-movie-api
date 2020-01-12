'use strict';
module.exports = (sequelize, DataTypes) => {
  const theaters = sequelize.define('theaters', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  theaters.associate = function (models) {
    // associations can be defined here
    // theaters.hasMany(models.tickets, {
    //   as: "theatersId",
    //   foreignKey: "theater_id"
    // })
  };
  return theaters;
};