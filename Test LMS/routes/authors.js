var express = require('express');
var router = express.Router();
var Author = require('../models/Author');
// app.use('/authors', authorsRouter);

//router address localhost:3000/authors
//descriptions: Author Dashboard Page
//comments: shows all authors
router.get('/', async (req, res, next)=> {
    try {
      const authors = await Author.find({});
      console.log(authors)
      res.render('authors/author_index',{authors: authors});
    } catch {
      res.redirect('/')
    }
   
  });

//router address localhost:3000/authors/new
//descriptions: New Author Register Page
//comments: Create form for register new Authors
router.get('/new', (req, res, next)=> {
    res.render('authors/new', {author: new Author()});
});

//router address localhost:3000/authors/new
//descriptions: Create new Author PAGE
//comments: Obtain new authors register information
router.post('/', async (req, res, next)=> {
    const author = new Author ({
        author_name : req.body.author_name,
        type : req.body.type
    })
    try {  
          const newAuthor = await author.save()
          res.redirect('authors')
    } catch {
            res.render('authors/new', {
            auhtor: author,
            error: 'Error in Creating Author'
            })
    }
});



module.exports = router;