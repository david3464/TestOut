var express = require('express');
var router = express.Router();
// app.use('/', indexRouter);

//router address localhost:3000/
//descriptions: Initial Index Page
//comments: Enterance Page
router.get('/', (req, res, next)=> {
  res.render('index', { layout:'hero_layout'});
});

//router address localhost:3000/about
//descriptions: Hidden Page, cant be direct into this page only type address
//comments: Test Page for layout Setting
//status: not online need direct route
router.get('/about', (req, res, next)=> {
  res.render('about');
});

module.exports = router;
