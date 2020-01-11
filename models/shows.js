'use strict';
module.exports = (sequelize, DataTypes) => {
  const shows = sequelize.define('shows', {
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    movie_id: DataTypes.INTEGER,
    show_time01: DataTypes.TIME,
    show_time02: DataTypes.TIME,
    show_time03: DataTypes.TIME,
    show_time04: DataTypes.TIME,
    show_time05: DataTypes.TIME,
    theater_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  shows.associate = function (models) {
    // associations can be defined here
    shows.belongsTo(models.movies, {
      as: 'movieId',
      foreignKey: 'movie_id'
    })
    shows.belongsTo(models.theaters, {
      as: 'theaterId',
      foreignKey: 'theater_id'
    })
  };
  return shows;
};