const User = require('../models/User');

module.exports = async (req, res) => {
    await User.create(req.body, (error, user) => {
        if(error) {
            res.redirect('/');
        }
    });
};