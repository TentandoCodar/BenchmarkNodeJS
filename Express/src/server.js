const app = require('./app');
const connect = require('./database/mongoconnect');
const UserController = require('./controllers/UserController');
app.preStart(() => {
    connect();
})

app.init(3333, () => {
    console.log("Server is running on port 3333");
})