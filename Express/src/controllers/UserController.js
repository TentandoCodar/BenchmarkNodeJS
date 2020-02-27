const User = require('../database/models/User');
const bcrypt = require('bcryptjs');
class UserController {
    async store() {
        // const password = '123456';
        // const hashed_password = await bcrypt.hash(password, 15);
        // let array = [];
        // console.log(hashed_password);
        // for(let i = 0; i <= 10000; i++) {
        //     array.push({
        //         name: 'Gustavo',
        //         email: 'gustavosjn2013@gmail.com',
        //         password: hashed_password
        //     })
        // }
        // const users = await User.insertMany(array);
        // console.log(users);
    }

    async index(req,res) {
        console.log('Ola')
        const users = await User.find();
        return res.json(users);
    }
}

module.exports = new UserController;