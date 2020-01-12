const Show = require('../models').shows

exports.index = (req, res) => {
    Show.findAll()
        .then(shows => res.send(shows))
        .catch(err => res.send(err))
}
//=====FOR ADD Show (JUST ADMIN WHO CAN BE ADD) ===== //
exports.store = (req, res) => {
    Show.create(req.body).then(Show => {
        res.send({
            message: "success",
            Show
        })
    })
}
exports.update = (req, res) => {
    Show.update(
        req.body,
        { where: { id: req.params.id } })
        .then(Show => res.json({
            data: Show,
            error: false,
            message: 'Show has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
}
exports.delete = (req, res) => {
    Show.destroy({ where: { id: req.params.id } })
        .then(status => res.json({
            error: false,
            message: 'Deleted!'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
}