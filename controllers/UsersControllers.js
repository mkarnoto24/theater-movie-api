const jwt = require('jsonwebtoken')

const models = require('../models')
const Customer = models.customers
exports.login = (req, res) => {

    const email = req.body.email
    const password = req.body.password

    Customer.findOne({
        where: { email, password }, attributes: ["id", "name", "email", "phone_number"]
    }).then(customers => {
        if (customers) {
            const token = jwt.sign({ cusetomersId: customers.id }, 'theater-movies-key')

            res.send({
                message: "success!",
                customers:{
                    id: customers.id, name: customers.name, phone_number: customers.phone_number
                },
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
    Customer.create(req.body).then(customers => {
        if (customers) {
            const token = jwt.sign({ CustomersId: customers.id }, 'theater-movies-key')
            res.send({
                customers:
                {
                    id: customers.id, name: customers.name, phone_number: customers.phone_number
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
    Customer.update(req.body, ({
        where: [{ id: req.params.id }]
    })).then(customers => res.send({
        message: "Success!",
        customers
    })).catch(err => res.send(err))
}
exports.delete = (req, res) => {
    Customer.destroy({ where: { id: req.params.id } }).then(customers => {
        res.send({
            message: "success",
            customers
        })
    })
}