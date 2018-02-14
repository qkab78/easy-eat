const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;

//Routes
const index = require('./api/routes/index');
const cinemas = require('./api/routes/cinemas');
const users = require('./api/routes/users');

app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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