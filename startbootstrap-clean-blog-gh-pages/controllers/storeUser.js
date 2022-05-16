const { response } = require('express');
const User = require('../models/User');

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if(error) {
            return res.redirect('/users/register');
        }
        res.redirect('/');
    });
};