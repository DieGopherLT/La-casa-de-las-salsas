const express = require('express');

//Lo hago a modo de clase para que sea más legible.
class Server {

    constructor() {
        this.app = express();
        this.apiRoutes = {

        }

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
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
