var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var books = require('./routes/books.js');
app.use('/books', books);

app.listen(3000);


module.exports = app;