var express = require('express');
var router = express.Router();
var Author = require('../models/author')

//app.use('/authors', authorsRouter);

/* GET Author Listing. */
router.get('/', async (req, res, next) => {
  let searchOptions ={}
  if(req.query.name !=null && req.query.name !==''){
    searchOptions.name = new RegExp(req.query.name,'i')//'i' make it case not sensitive can be type either Capital or Smaller
  }
  try {
    const authors = await Author.find (searchOptions);
    res.render('authors/index', {
      authors: authors,
      searchOptions: req.query
    });
  } catch {
    res.redirect('/')
  }
});

//New Author Route
router.get('/new', (req, res) => {
  res.render('authors/new', {author: new Author()})
});

//Create Author Route
router.post('/', (req, res) => {
  const author = new Author ({
    name : req.body.name
  })
  author.save((err, newAuthor)=>{
    if(err){
      res.render('authors/new',{
        author:author,
        errorMessage: 'Error creating Author'
      })
    } else {
      // res.redirect(`authors/${newAuthor.id}`)
       res.redirect(`authors`)
    } 
  });
});

module.exports = router;
