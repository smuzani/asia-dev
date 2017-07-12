var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
mongoose.connect('mongodb://muzani:mypass@ds153682.mlab.com:53682/books');
var User = require('../models/user.js');

router.post('/register', function(req, res){
    if(!req.body.username ||      
    !req.body.password) {            
        res.status(400);      
        res.json({errors: "Bad Request"});   
    } else {      
        res.json({message: "Registered as " + req.body.username})
    } 
});

router.post('/login', function(req, res){
    if(!req.body.username ||      
    !req.body.password) {            
        res.status(400);      
        res.json({errors: "Bad Request"});   
    } else {      
        res.json({message: "Logged in as " + req.body.username})
    } 
});

module.exports = router;