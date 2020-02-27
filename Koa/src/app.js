const Koa = require('koa');
const router = require('./router');


class App {
    constructor() {
        this.server = new Koa();
        this.routes();
    }

    routes() {
        this.server.use(router.routes());
    }

    init() {
        this.server.listen(3333);
        console.log("Server is running on port 3333")
    }
}

module.exports = new App();