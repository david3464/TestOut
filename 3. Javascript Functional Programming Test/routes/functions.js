var express = require('express');
var router = express.Router();

//router address localhost:2001/functions
//descriptions: function index Page
//comments: set up function list page
router.get('/', function(req, res, next) {
  res.render('functions/index');
});

//router address localhost:2001/functions/01
//descriptions: Lecutre One Javascript
//comments: 
router.get('/01', function(req, res, next) {
  res.render('functions/lecture01');
});

//router address localhost:2001/functions/02
//descriptions: Lecutre Two Javascript
//comments: 
router.get('/02', function(req, res, next) {
  res.render('functions/lecture02');
});

//router address localhost:2001/functions/03
//descriptions: Lecutre Three Javascript
//comments: 
router.get('/03', function(req, res, next) {
  res.render('functions/lecture03');
});


module.exports = router;
