const express = require('express');
const path = require('path');
const products = require('./products');
const { log } = require('console');
const authorise = require('./authorise');

const app = new express();

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getUTCDate();

    console.log(method, url, time);
    next();
};

//app.use(logger);

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.redirect('html/index.html');
});

app.get('/products/:id', (req, res) => {
    res.json(products.find(product => product.id === Number(req.params.id)));
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/api/v1/query', (req, res) => {
    res.send(req.query);
});

app.post('/login', (req, res) => {
    const name = req.body.firstName;

    if(name) {
        return res.send(`welcome ${name}`);
    }
    else {
        res.status(401).send('need a name');
    }
});

app.post('/add', (req, res, next) => {
    products.push({id: 3, title: req.body.firstName});
    console.log(products);
    next();
}, (req, res) => {
    res.send('cool');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
