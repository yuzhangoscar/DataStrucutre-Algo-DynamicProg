const express = require('express');
const router = express.Router();

const app = express();

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

app.use('/wiki', router)
    .listen(3000);

