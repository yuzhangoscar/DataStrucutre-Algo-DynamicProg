const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const { username, password } = req.body;

    User.findOne({username: username}, (error, user) => {
        if(user) {
            console.log('user existed');
            console.log(`input password is: ${password}, password hash is ${user.password}`);
            bcrypt.compare(password, user.password, (error, same) => {
                if(same) {
                    console.log('login successful');
                    res.redirect('/');
                }
                else{
                    console.log('login unsuccessful');
                    res.redirect('/users/login');
                }
            })
        }
        else {
            res.redirect('/users/login');
        }
    });
};
