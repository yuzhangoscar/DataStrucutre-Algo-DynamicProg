const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = new express();
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index');
});
app.get('/about', (req,res) => {
    res.render('about');
});
app.get('/contact', (req,res) => {
    res.render('contact');
});
app.get('/post', (req,res) => {
    res.render('post');
});
app.use(express.static('public'));
app.listen(3000, ()=>{
    console.log('listening on 3000');
});