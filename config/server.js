const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

const db = require('./db');
require('../models/Customer.models');
require('../models/Employee.models');
require('../models/Saucer.models');
require('../models/Sauces.models');
require('../models/Order.models');
require('../models/DetailOrder.models');

//Lo hago a modo de clase para que sea más legible.
class Server {

    constructor() {
        this.app = express();

        this.middlewares();
        this.routes();
        this.views();
        db.sync({ alter: true, logging: false })
            .then(() => {
                console.log('DataBase connected');
            })
    }

    views() {
        const viewPath = path.join(__dirname, '../views');
        this.app.set('view engine', 'pug');
        this.app.set('views', viewPath);
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(express.static('public'));

        this.app.use(session({
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: false,
        }));

        this.app.use(flash());
        this.app.use((req, res, next) => {
            res.locals.error = req.flash('error');
            res.locals.success = req.flash('success');
            next();
        });
    }

    routes() {
        this.app.use('/', require('../routes/customer.route'));
        // This one has to be the last one to make the 404 page to work
        this.app.use('/', require('../routes/pages.route'));
    }

    run() {
        const PORT = process.env.PORT | 4000;
        this.app.listen(PORT, () => {
            console.log(`Server working on port: ${ PORT }`);
        });
    }
}

module.exports = Server;
