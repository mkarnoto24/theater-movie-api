'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie_genres = sequelize.define('movie_genres', {
    movie_id: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER
  }, {});
  movie_genres.associate = function (models) {
    // associations can be defined here
    movie_genres.belongsTo(models.genres, {
      as: "genreId",
      foreignKey: "genre_id"
    })
    movie_genres.belongsTo(models.movies, {
      as: "movieId",
      foreignKey: "movie_id"
    })

  };
  return movie_genres;
};