module.exports = (server) => {
    server.get('/', (req,res) => {
        return res.send('Hello world');
    })
}