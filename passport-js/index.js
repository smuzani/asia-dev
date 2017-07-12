var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var users = require('./routes/users.js');
app.use('/user', users);

app.listen(3000);


module.exports = app;