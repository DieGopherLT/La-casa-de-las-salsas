const express = require('express');
const path = require('path');

//Lo hago a modo de clase para que sea más legible.
class Server {

    constructor() {
        this.app = express();
        this.apiRoutes = {

        }

        this.middlewares();
        this.routes();
        this.views();
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
    }

    routes() {

    }

    run() {
        const PORT = process.env.PORT | 4000;
        this.app.listen(PORT, () => {
            console.log(`Server working on port: ${ PORT }`);
        });
    }
}

module.exports = Server;
