const User = require('../models/User');

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if(error) {
            console.log(`encountered error, ${error}`);
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
            req.flash('validationErrors', validationErrors);
            req.flash('data', req.body);
            res.redirect('/users/register');
        }
        else res.redirect('/');
    });
};