var express = require('express');
var router = express.Router();

//router address localhost:2001/functions
//descriptions: function index Page
//comments: set up function list page
router.get('/', function(req, res, next) {
  res.render('functions/index');
});


module.exports = router;
