const mongoose = require('mongoose');



module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/benchmark', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((resp) => {
        console.log('Connect');
    }).catch((err) => {
        console.log('Not connect')
    });
}