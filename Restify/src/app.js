const restify = require('restify');
const router = require('./routes');
class App {
    constructor() {
        this.server = restify.createServer();
        this.routes();
    }

    routes() {
        router(this.server);
    }

    init(port, callback) {
        this.server.listen(port, callback)
    }
}

module.exports = new App();