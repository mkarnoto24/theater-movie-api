const jwt = require('jsonwebtoken')

const models = require('../models')
const Admin = models.admins
exports.login = (req, res) => {

    const email = req.body.email
    const password = req.body.password

    Admin.findOne({
        where: { email, password }, attributes: ["id", "name", "email"]
    }).then(admins => {
        if (admins) {
            const token = jwt.sign({ cusetomersId: admins.id }, 'theater-movies-key')

            res.send({
                message: "success!",
                admins,
                token
            })
        } else {
            res.send({
                error: true,
                message: "Wrong Email or Password"
            })
        }
    })

}
exports.register = (req, res) => {
    Admin.create(req.body).then(admins => {
        if (admins) {
            const token = jwt.sign({ adminsId: admins.id }, 'theater-movies-key')
            res.send({
                admins:
                {
                    id: admins.id, name: admins.name, email: admins.email
                },
                message: "success",
                token
            })
        } else {
            res.send({
                error: true,
                message: "Registration Failed!"
            })
        }
    })

}
exports.update = (req, res) => {
    Admin.update(req.body, ({
        where: [{ id: req.params.id }]
    })).then(admins => res.send({
        message: "Success!",
        admins
    })).catch(err => res.send(err))
}
exports.delete = (req, res) => {
    Admin.destroy({ where: { id: req.params.id } }).then(admins => {
        res.send({
            message: "success",
            admins
        })
    })
}