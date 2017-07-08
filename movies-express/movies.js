var express = require('express');
var router = express.Router();
var movies  = [
    {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
    {id: 102, name: "Inception", year: 2010, rating: 8.7},
    {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
    {id: 104, name: "12 Angry Men", year: 1957, rating: 9.1}   
]

router.get('/', function(req, res){
    res.json(movies);
});

router.get("/:id([0-9]{3,})", function(req, res){
    var currMovie = movies.filter(function(movie){
        if (movie.id == req.params.id) {
            return true;
        }
    });
    if (currMovie.length == 1) {
        res.json(currMovie[0])
    } else {
        res.status(404);
        res.json({error: "Not Found"})
    }
});

module.exports = router;