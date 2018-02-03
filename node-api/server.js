const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

//Routes
const index = require('./api/routes/index');

app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Utilisation des routes
app.use('/', index);

app.listen(port);

console.log('Easy-eat RESTful API server started on: ' + port);

module.exports = app;