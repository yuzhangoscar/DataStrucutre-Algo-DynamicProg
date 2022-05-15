const express = require('express');
const ejs = require('ejs');
const BlogPost = require('./models/BlogPost');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const newPostController = require('./controllers/newPost');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
const app = new express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({});
    res.render('index', {
        blogposts
    });
});
app.get('/posts/new', newPostController);
app.get('/post/:id', async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id);
    res.render('post', {
        blogpost
    });
});
app.post('/posts/store', (req, res) => {
    BlogPost.create(req.body, (error, blogpost) => {
        res.redirect('/');
    });
});

app.listen(3000);