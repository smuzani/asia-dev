var express = require('express');
var router = express.Router();
var books  = [
    {id: 1, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1981, pages: 224},
    {id: 2, title: "The Hobbit", author: "J.R.R Tolkien", year: 1937, pages: 72},
    {id: 3, title: "The Lovely Bones", author: "Alice Sebold", year: 2002, pages: 328},
    {id: 4, title: "Dracula", author: "Bram Stroker", year: 1897, pages: 448}
]

router.get('/', function(req, res){
    res.json(books);
});

router.get("/:id([0-9])", function(req, res){
    var currBook = books.filter(function(book){
        if (book.id == req.params.id) {
            return true;
        }
    });
    if (currBook.length == 1) {
        res.json(currBook[0])
    } else {
        res.status(404);
        res.json({error: "Not Found"})
    }
});

router.post('/', function(req, res){
    if(!req.body.title ||      
    !req.body.author ||
    !req.body.year.toString().match(/^[0-9]{4}$/g) ||      
    !req.body.pages.toString().match(/^[0-9]{1,}$/g)){            
        res.status(400);      
        res.json({message: "Bad Request"});   
    } else {      
        var newId = books[books.length-1].id+1;      
        books.push({         
            id: newId,         
            title: req.body.title,
            author: req.body.author,
            year: req.body.year,
            pages: req.body.pages,
        });      
        res.json({message: "New book created.", location: "/books/" + newId});   
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
        var updateIndex = books.map(function(book){         
            return book.id;      
        }).indexOf(parseInt(req.params.id)); 
        if(updateIndex === -1){
            res.json({message: "Id doesn't exist: " + req.params.id});      
        } else {         
            books[updateIndex] = {            
                id: parseInt(req.params.id),         
                title: req.body.title,
                author: req.body.author,
                year: parseInt(req.body.year),
                pages: parseInt(req.body.pages),
            };         
            res.json({message: "Book id " + req.params.id + " updated.", 
                location: "/books/" + req.params.id});      
        }   
    }
});

router.delete('/:id', function(req, res){   
    var removeIndex = books.map(function(book){         
        return book.id;      
    }).indexOf(parseInt(req.params.id)); 
    if(removeIndex === -1){
        res.json({message: "Id doesn't exist: " + req.params.id});      
    } else {      
        books.splice(removeIndex, 1);      
        res.send({message: "Book id " + req.params.id + " removed."});   
    } 
});

module.exports = router;