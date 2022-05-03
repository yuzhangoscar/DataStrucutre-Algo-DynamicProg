const express = require('express');
const router = express.Router();
const path = require('path');

const app = express();

app.use('/static', express.static('public'));

router.get('/', function(req, res){
    res.send('home page');
})

router.get('/about', function(req, res) {
    res.send('About this wiki');
})

router.get('/json', function(req, res){
    res.json({
        name:'y'
    });
})

router.get('/index', function(req,res){
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

app.use('/wiki', router)
    .listen(3000);