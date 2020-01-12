const Genre = require('../models').genres

exports.index = (req, res) => {
    // const Op = Sequelize.Op;
    Genre.findAll()
        .then(genre => res.json({

            data: genre,
            error: false,
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
}

//=====FOR ADD MOVIE (JUST ADMIN WHO CAN BE ADD) ===== //
exports.store = (req, res) => {
    Genre.create(req.body)
        .then(genre => res.status(201).json({

            data: genre,
            message: 'Success',
            error: false,
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
}
exports.update = (req, res) => {
    Genre.update(
        req.body,
        { where: { id: req.params.id } })
        .then(genre => res.json({

            data: genre,
            error: false,
            message: 'Genre has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
}
exports.delete = (req, res) => {
    Genre.destroy({ where: { id: req.params.id } })
        .then(status => res.json({
            error: false,
            message: 'Deleted!'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
}