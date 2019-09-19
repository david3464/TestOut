var express = require('express');
var router = express.Router();

//router address localhost:2001/func_tutorials/index
//descriptions: Tutorial List
//comments: 
router.get('/index', function(req, res, next) {
  res.render('functions/tutorials/index');
});

//router address localhost:2001/func_tutorials/01
//descriptions: Tutorials One 
//comments: 
router.get('/01', function(req, res, next) {
  res.render('functions/tutorials/tut01');
});

module.exports = router;
