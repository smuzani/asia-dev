var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var shortlink = require('shortlink');
var validUrl = require('valid-url');

mongoose.connect('mongodb://muz:pass@ds145263.mlab.com:45263/urlshortening');
var Url = require('../models/urls.js');

router.get("/new/*", function(req, res){
    var original = req.param(0);
    var short = shortlink.generate(8); 
    if (validUrl.isUri(original)){
        var url = new Url();
        url.original_url = original;
        url.short_url = short;
        url.save(function(err) {
            if (err){
                res.send(err);
            }
            res.json({url_original:original, url_short:short});
        });
    } else {
        res.json({error: "Invalid URL"});
    }


});

router.get("/:id", function(req, res){
    var id = req.params.id;
    Url.findOne({short_url:id}, function(err, url) {
        if (err){
            res.send(err);
        }
        var original = url.original_url;
        res.redirect(original);
    });
});

module.exports = router;