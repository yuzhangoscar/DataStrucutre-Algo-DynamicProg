const express = require('express');
const fileServerMiddleware = express.static('public');

const app = express();
app.use('/', fileServerMiddleware);
app.listen(3000, function() {
    console.log('lisstening on 3000');
});