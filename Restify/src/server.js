const app = require('./app');

app.init(3333, () => {
    console.log("Server is running on port 3333");
})