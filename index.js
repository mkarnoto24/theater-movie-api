//init Express
const express = require('express')
//init bodyParser
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 8000

//allow this app to receive incoming json request
app.use(bodyParser.json())

// ========#enable cors#======== //
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// ========#IMPORT CONTROLLER#======== //
const CustomersController = require('./controllers/UsersControllers') //CONTROLLER FOR CUSTOMER
const MoviesController = require('./controllers/MovieControllers') //CONTROLLER FOR MOVIE
const AdminController = require('./controllers/AdminControllers') //CONTROLLER FOR ADMIN
const OrdersController = require('./controllers/OrdersControllers') //CONTROLLER FOR SHOW SCHEDULE



// ======== CUSTOMER ROUTER ======== //
app.group("/api/v1", (router) => {
    router.post('/customer/register', CustomersController.register) // ====> END POINT FOR REGISTER CUSTOMER
    router.post('/customer/login', CustomersController.login) // ====> END POINT FOR LOGIN CUSTOMER
    router.patch('/customer/:id', CustomersController.update) // ====> END POINT FOR UPDATE DATA CUSTOMERS
    router.delete('/customer/:id', CustomersController.delete)// ====> END POINT FOR DELETE DATA CUSTOMERS
})

// ======== ADMIN ROUTER ======== //
app.group("/api/v1", (router) => {
    router.post('/admin/register', AdminController.register) // ====> END POINT FOR REGISTER ADMIN
    router.post('/admin/login', AdminController.login) // ====> END POINT FOR LOGIN ADMIN
    router.patch('/admin/:id', AdminController.update) // ====> END POINT FOR UPDATE DATA ADMIN
    router.delete('/admin/:id', AdminController.delete)// ====> END POINT FOR DELETE DATA ADMIN
})
// ======== MOVIE ROUTER ======== //
app.group("/api/v1", (router) => {
    router.get('/movies', MoviesController.index) // ====> END POINT FOR GET ALL MOVIE
    router.get('/movie/:id', MoviesController.show) // ====> END POINT FOR GET MOVIE BY ID MOVIE
    router.post('/movies', MoviesController.store) // ====> END POINT FOR ADD MOVIE
    router.patch('/movies/:id', MoviesController.update) // ====> END POINT FOR UPDATE DATA MOVIE
    router.delete('/movies/:id', MoviesController.delete)// ====> END POINT FOR DELETE DATA ADMIN
})
// ======== MOVIE ORDER TICKETING ======== //
app.group("/api/v1", (router) => {
    router.get('/order/:id', OrdersController.index) // ====> END POINT FOR GET SCHEDULE AND ORDER TICKET
})


app.listen(port, () => console.log(`Loading on port ${port}!`))