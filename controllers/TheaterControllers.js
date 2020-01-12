const models = require('../models')
const Theater = models.theaters

exports.index = (req, res) => {
    Theater.findAll()
        .then(theater => res.send(theater))
        .catch(err => res.send(err))
}

exports.store = (req, res) => {
    Theater.create(req.body).then(theater => {
        res.send({
            message: "success",
            theater
        })
    })
}
exports.update = (req, res) => {
    Theater.update(req.body, ({
        where: [{ id: req.params.id }]
    })).then(theaters => res.send({
        message: "Success!",
        theaters
    })).catch(err => res.send(err))
}
exports.delete = (req, res) => {
    Theater.destroy({ where: { id: req.params.id } }).then(theaters => {
        res.send({
            message: "success",
            theaters
        })
    })
}