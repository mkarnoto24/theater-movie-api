const Movie = require('../models').movies
const Show = require('../models').shows
const Genres = require('../models').movie_genres
const Genre = require('../models').genres
var Sequelize = require('sequelize');

exports.index = (req, res) => {
    const Op = Sequelize.Op;
    Movie.findAll()
        .then(shows => res.send(shows))
        .catch(err => res.send(err))
}
exports.show = (req, res) => {
    Movie.findOne({
        include: [
            {
                model: Genre,
                as: "genreId"
            }
        ],
        where: { id: req.params.id }
    })
        .then(movies => res.send(movies))
        .catch(err => res.send(err))
}

//=====FOR ADD MOVIE (JUST ADMIN WHO CAN BE ADD) ===== //
exports.store = (req, res) => {
    Movie.create(req.body).then(movies => {
        res.send({
            message: "success",
            movies
        })
    })
}
//=====FOR UPDATE MOVIE (JUST ADMIN WHO CAN BE UPDATE) ===== //
exports.update = (req, res) => {
    Movie.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(movies => {
        res.send({
            message: "success",
            movies
        })
    })
}
//=====FOR DELETE MOVIE (JUST ADMIN WHO CAN BE DELETE) ===== //
exports.delete = (req, res) => {
    Movie.destroy({ where: { id: req.params.id } }).then(movies => {
        res.send({
            message: "success",
            movies
        })
    })
}