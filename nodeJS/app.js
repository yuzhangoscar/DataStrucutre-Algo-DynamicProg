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

app.use(logger, authorise);

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.get('/products/:id', (req, res) => {
    res.json(products.find(product => product.id === Number(req.params.id)));
});

app.get('/api/v1/query', (req, res) => {
    res.send(req.query);
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
