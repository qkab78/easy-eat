const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const port = 3000;

//Routes
const index = require('./api/routes/index');
const cinemas = require('./api/routes/cinemas');
const users = require('./api/routes/users');

app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly:true }
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

//Utilisation des routes
app.use('/', index);
app.use('/cinemas', cinemas);
app.use('/users', users);

app.listen(port);

console.log('Easy-eat RESTful API server started on: ' + port);

//Connexion à la bdd
mongoose.connect('mongodb://localhost/easyeat', (err) => {
    if(err) throw err;
});
module.exports = app;
// Equipe 3