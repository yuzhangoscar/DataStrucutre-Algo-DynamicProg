const BlogPost = require('../models/BlogPost');

module.exports = (req, res) => {
    BlogPost.create(req.body, (error, blogpost) => {
        res.redirect('/');
    });
};