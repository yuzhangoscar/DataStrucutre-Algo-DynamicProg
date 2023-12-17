module.exports = (req, res, next) => {
    if (req.query.user === 'john') {
        console.log('it is john');
        next();
    }
    else {
        res.status(401);
    }
};
