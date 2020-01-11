'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookings = sequelize.define('bookings', {
    ticket_id: DataTypes.INTEGER,
    cust_id: DataTypes.INTEGER,
    booking_dates: DataTypes.DATE
  }, {});
  bookings.associate = function (models) {
    // associations can be defined here
    bookings.belongsTo(models.customers, {
      as: "custId",
      foreignKey: "cust_id"
    })
    bookings.belongsTo(models.movies, {
      as: "movieId",
      foreignKey: "movie_id"
    })
  };
  return bookings;
};