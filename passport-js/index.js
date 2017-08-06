var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport'); 
var authController = require('./auth');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize())

var users = require('./routes/users.js');
app.use('/user', users);

app.route('/').get(authController.isAuthenticated, function(req, res) {
    res.json({message: "Successfully authenticated"})
})

app.listen(3000);


module.exports = app;