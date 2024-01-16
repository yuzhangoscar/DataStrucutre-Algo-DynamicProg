const express = require('express');
const app = express();
const router = require('./controllers/about');

app.use('/app', router);

app.listen(3001, () => {
    console.log('running on 3001');
});
