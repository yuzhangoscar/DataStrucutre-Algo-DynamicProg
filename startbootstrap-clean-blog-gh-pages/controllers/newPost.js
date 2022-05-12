module.exports = (req, res) => {
    if(req.session.userId) {
        res.render('create', {
            createPost: true
        });
    }
    else {
        res.redirect('/users/login');
    }
}