'use strict';
module.exports = (sequelize, DataTypes) => {
  const seats = sequelize.define('seats', {
    seat_name: DataTypes.STRING,
    seat_no: DataTypes.INTEGER,
    theaters_id: DataTypes.INTEGER
  }, {});
  seats.associate = function (models) {
    // associations can be defined here
    seats.belongsTo(models.theaters, {
      as: "theatersId",
      foreignKey: "theaters_id"
    })
  };
  return seats;
};