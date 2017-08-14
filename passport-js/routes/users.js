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
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.save(function(err) {
            if (err)
                res.json({error: err});
            res.json({message: "Registered as " + req.body.username})
        });
    } 
});

router.post('/login', function(req, res){
    if(!req.body.username ||      
    !req.body.password) {            
        res.status(400);      
        res.json({errors: "Bad Request"});   
    } else {      
        User.findOne({ username: req.body.username }, function(err, user) {
            if (err) throw err;

            // test a matching password
            user.verifyPassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                console.log('Password:', isMatch); // -> Password123: true
                if (isMatch) {
                    res.json({message: "Logged in as " + req.body.username});
                } else {
                    res.json({message: "Invalid username/password"});
                }
            });
        });
    } 
});



module.exports = router;