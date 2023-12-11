module.exports = app => {
    app.get('/tasks', (req, res) => {
        res.json({
            tasks: [
                {title: 'some title one'},
                {title: 'some title two'}
            ]
        });
    });
};
