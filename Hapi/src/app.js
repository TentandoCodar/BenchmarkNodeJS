const Hapi = require('@hapi/hapi');
const router = require('./routes');

class App {
    constructor(port, host) {
        this.server = Hapi.server({
            port,
            host
        });
        this.routes();
    }

    routes() {
        router(this.server);
    }

    async init() {
        await this.server.start();
        console.log('Server is running on port 3333')
    }
}

module.exports = new App(3333, 'localhost');