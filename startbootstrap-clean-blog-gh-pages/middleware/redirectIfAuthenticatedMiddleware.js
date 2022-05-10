module.exports = (req, res, next) => {
    if(req.session.userId) {
        console.log('existing user detected');
        res.redirect('/');
    }
    else next();
}
