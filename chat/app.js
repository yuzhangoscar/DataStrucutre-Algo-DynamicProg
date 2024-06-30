const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => {
    console.log(`listening to ${port}`);
})
