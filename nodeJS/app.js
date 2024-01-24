require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
const port = 3000 || process.env.PORT;  

app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
connectDB();
// static files
app.use(express.static('public'));

// Template engines
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/oauth'));
app.use('/', require('./server/routes/index'));

//404
app.get('*', (req, res) => {
    res.status(404).render('404')
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
