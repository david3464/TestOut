var express = require('express');
var router = express.Router();

//router address localhost:2001/
//descriptions: Entrance Page
//comments:index
router.get('/', function(req, res, next) {
  res.render('index');
});

//router address localhost:2001/about
//descriptions: About Page
//comments:use for testing for different layout
router.get('/about', function(req, res, next) {
  res.render('about', { layout: 'hero_layout' });
});

module.exports = router;
