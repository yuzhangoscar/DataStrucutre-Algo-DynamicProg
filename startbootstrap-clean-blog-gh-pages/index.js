const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const getPostController = require('./controllers/getPost');
const storePostController = require('./controllers/storePost');
const registerController = require('./controllers/register');
const storeUserController = require('./controllers/storeUser');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
const app = new express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', homeController);
app.get('/posts/new', newPostController);
app.get('/post/:id', getPostController);
app.get('/users/register', registerController);
app.post('/users/register', storeUserController);
app.post('/posts/store', storePostController);

app.listen(3000);