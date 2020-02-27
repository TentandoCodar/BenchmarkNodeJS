const UserController = require('./controller/UserController');

module.exports = (fastify) => {
    fastify.route({
        method: 'GET',
        url: '/',
        schema: {
            querystring: {
                name: {type: 'string'},
            }
        },
        response: {
            200: {
                type: 'string',
            }
        },
        handler: UserController.store
    });
}