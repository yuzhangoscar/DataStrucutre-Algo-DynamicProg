const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the home page for about');
});

router.get('/about', (req, res) => {
    res.send('This is the about page for about');
});

module.exports = router;
