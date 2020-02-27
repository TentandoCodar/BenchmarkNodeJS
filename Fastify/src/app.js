const fastify = require('fastify');
const router = require('./routes');
class App {
    constructor() {
        this.server = fastify();
        this.routes();
    }

    routes() {
        router(this.server);
    }

    init(port, callback) {
        this.server.listen(port, callback);
    }
} 

module.exports = new App();