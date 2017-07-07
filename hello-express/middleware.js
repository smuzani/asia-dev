var express = require('express');
var app = express();

app.use(function(req, res, next){
    console.log("A new request recieved at " + Date.now());
    next();
})

app.get("/",function(req, res, next){
    console.log("End");
    next();
});

app.use("/",function(req, res, next){
    console.log("Middle");
    res.send("Middle")
    next();
});

app.listen(3000);