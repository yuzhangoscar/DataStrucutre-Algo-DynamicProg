const User = require('../models/User');

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if(error) {
            console.log(`encountered error, ${error}`);
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
            req.session.validationErrors = validationErrors;
            console.log(req.session.validationErrors);
            res.redirect('/users/register');
        }
        else res.redirect('/');
    });
};