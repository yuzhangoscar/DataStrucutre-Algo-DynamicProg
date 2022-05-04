const express = require('express');
const path = require('path');
const app = new express();

app.use(express.static('public'));
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});
app.get('/about', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});
app.get('/contact', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});
app.get('/post', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});
app.listen(3000, ()=>{
    console.log('listening on 3000');
});