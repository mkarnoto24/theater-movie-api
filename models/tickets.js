'use strict';
module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define('tickets', {
    ticket_no: DataTypes.STRING,
    show_date: DataTypes.DATE,
    show_id: DataTypes.INTEGER,
    seat_no: DataTypes.STRING,
    price: DataTypes.INTEGER,
    admin_id: DataTypes.INTEGER,
    theater_id: DataTypes.INTEGER,
    confirmation: DataTypes.STRING
  }, {});
  tickets.associate = function (models) {
    // associations can be defined here
    tickets.belongsTo(models.admins, {
      as: 'adminId',
      foreignKey: 'admin_id'
    })
    tickets.belongsTo(models.shows, {
      as: 'showId',
      foreignKey: 'show_id'
    })
    tickets.belongsTo(models.theaters, {
      as: 'theatersId',
      foreignKey: 'theaters_id'
    })
  };
  return tickets;
};