var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var books  = [
    {id: 1, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1981, pages: 224},
    {id: 2, "title": "The Hobbit", "author": "J.R.R Tolkien", "year": 1937, "pages": 72},
    {id: 3, "title": "The Lovely Bones", "author": "Alice Sebold", "year": 2002, "pages": 328},
    {"id": 4, "title": "Dracula", "author": "Bram Stroker", "year": 1897, "pages": 448}
];

mongoose.connect('mongodb://muzani:mypass@ds153682.mlab.com:53682/books');
var Book = require('./models/book.js');

router.get('/', function(req, res){
    Book.find(function(err, books) {
    if (err)
        res.send(err);
        res.json(books);
    });
});

router.get("/:id", function(req, res){
    Book.findById(req.params.id, function(err, books) {
    if (err)
        res.send(err);
        res.json(books);
    });
});

router.post('/', function(req, res){
    if(!req.body.title ||      
    !req.body.author ||
    !req.body.year.toString().match(/^[0-9]{4}$/g) ||      
    !req.body.pages.toString().match(/^[0-9]{1,}$/g)){            
        res.status(400);      
        res.json({message: "Bad Request"});   
    } else {      
        var book = new Book();
        book.title = req.body.title;
        book.author = req.body.author;
        book.year = req.body.year;
        book.pages = req.body.pages;
        book.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Book created!' });
        });
    } 
});

router.put('/:id', function(req, res){
    if(!req.body.title ||      
    !req.body.author ||
    !req.body.year.toString().match(/^[0-9]{4}$/g) ||      
    !req.body.pages.toString().match(/^[0-9]{1,}$/g)){            
        res.status(400);      
        res.json({message: "Bad Request"});   
    } else {      
        Book.findById(req.params.id, function(err, book) {
            if (err)
                res.send(err);
            book.title = req.body.title;
            book.author = req.body.author;
            book.year = req.body.year;
            book.pages = req.body.pages;
            // save the book
            book.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Book updated!' });
            });
        });
    }
});

router.delete('/:id', function(req, res){   
    Book.remove({
        _id: req.params.id
    }, function(err, place) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully deleted' });
    });
});


module.exports = router;