const express = require('express');
const router = require('./routes');
class App {
    constructor() {
        this.server = express();
        this.middlewares();
    }


    middlewares() {
        this.server.use(router);
    }

    preStart(f) {
        f();
    }

    init(port, callback) {
        this.server.listen(port, callback);
    }
}

module.exports = new App();