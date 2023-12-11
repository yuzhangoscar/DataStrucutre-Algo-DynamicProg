module.exports = app => {
    let SN = 0;
    
    app.get('/', (req, res) => {
        res.json({status: "new api"});
    });

    app.get('/courses', (req, res) => {
        SN++;
        res.json([
            {title: 'one'},
            {title: 'two'},
            {SN: SN}
        ]);
    });
    
    app.post('/customer/:id', (req, res) => {
        res.send(`this customer is ${req.params.id}`);
    });
    
    app.get('/time/:year/:month/:day', (req, res) => {
        res.send(`${req.params.year}, ${req.params.month}, ${req.params.day}, ${JSON.stringify(req.query)}`);
    });
};
