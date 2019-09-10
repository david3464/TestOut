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


module.exports = router;
