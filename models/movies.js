'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    duration: DataTypes.TIME,
    sinopsis: DataTypes.TEXT,
    date_release: DataTypes.DATE,
    language: DataTypes.STRING,
    trailer: DataTypes.STRING,
    director: DataTypes.STRING,
    actor: DataTypes.STRING,
    genre_id: DataTypes.INTEGER
  }, {});
  movies.associate = function (models) {
    // associations can be defined here
    // movies.belongsTo(models.shows, {
    //   as: 'showId',
    //   foreignKey: 'show_id'
    // })
    movies.belongsTo(models.genres, {
      as: "genreId",
      foreignKey: "genre_id"
    })
    movies.hasMany(models.movie_genres, {
      as: "movieId",
      foreignKey: "movie_id"
    })
  };
  return movies;
};