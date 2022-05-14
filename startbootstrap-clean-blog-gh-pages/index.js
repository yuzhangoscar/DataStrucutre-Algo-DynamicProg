const express = require('express');
const ejs = require('ejs');
const BlogPost = require('./models/BlogPost');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
BlogPost.create({
    title:'my title',
    body: 'my body'
},(error, blogpost)=>{
    console.log(`created`);
});
const app = new express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/post', (req, res) => {
    res.render('post');
});
app.get('/posts/new', (req, res) => {
    res.render('post');
});

app.listen(3000);