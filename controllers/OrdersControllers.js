const Movie = require('../models').movies
const Show = require('../models').shows
const Theater = require('../models').theaters

exports.index = (req, res) => {

    Show.findAll({
        include: [
            {
                model: Theater,
                as: "theaterId"
            }
        ],
        where: {
            movie_id: req.params.id
        }
    })
        .then(shows => res.send(shows))
        .catch(err => res.send(err))

}