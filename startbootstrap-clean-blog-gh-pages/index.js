const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const getPostController = require('./controllers/getPost');
const storePostController = require('./controllers/storePost');
const newUserController = require('./controllers/newUser');

const app = new express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', homeController);
app.get('/post/:id', getPostController);
app.get('/posts/new', newPostController);
app.get('/users/register', newUserController);
app.post('/posts/store', storePostController);
app.listen(3000, ()=>{
    console.log('listening on 3000');
});