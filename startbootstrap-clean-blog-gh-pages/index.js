const express = require('express');
const ejs = require('ejs');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const getPostController = require('./controllers/getPost');
const storePostController = require('./controllers/storePost');
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');

global.loggedIn = null;
const app = new express();
app.set('view engine', 'ejs');
app.use(expressSession({secret: 'cat'}));
app.use('*', (req, res, next) => {
    loggedIn = req.session.userId;
    next();
});
app.use(express.static('public'));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', homeController);
app.get('/post/:id', getPostController);
app.get('/posts/new', authMiddleware, newPostController);
app.get('/users/register', redirectIfAuthenticatedMiddleware, newUserController);
app.get('/users/login', redirectIfAuthenticatedMiddleware, loginController);
app.get('/auth/logout', logoutController);
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController);
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);
app.post('/posts/store', authMiddleware, storePostController);
app.use((req, res) => res.render('notfound'));
app.listen(3000, ()=>{
    console.log('listening on 3000');
});