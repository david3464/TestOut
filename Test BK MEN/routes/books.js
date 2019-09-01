var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var Author = require('../models/author');

// All Book Route
router.get('/', async (req, res, next) => {
    res.send('All Books')
});

//New Book Route
router.get('/new', async (req, res) => {
    try{
        const authors = await Author.find ({})
        const book = new Book()
        res.render('books/new', { 
            authors: authors,
            book: book
        })
    } catch {
        res. redirect('/books')

    }
});

//Create Book Route
router.post('/', (req, res) => {
    res.send('Create Books')
});

module.exports = router;
