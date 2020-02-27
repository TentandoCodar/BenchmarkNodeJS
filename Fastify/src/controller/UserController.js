class User {
    store(request, reply) {
        return reply.send('Hello world');
    }
}

module.exports = new User();