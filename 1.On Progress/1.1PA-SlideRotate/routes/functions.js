var express = require('express');
var router = express.Router();
// app.use('/functions', functionsRouter);

/* GET users listing. */
router.get('/block', function(req, res, next) {
  res.render('functions/block', { title: 'Block Example for Stylesheets and Scripts(Javascripts)'});
});


router.get('/partials', function(req, res, next) {
  res.locals = {
    some_value: 'foo bar',
    list: ['cat', 'dog']
  } 
  res.render('functions/partfunction', { title: 'Partials Example'});
});

router.get('/javascript', function(req, res, next) {
  res.render('functions/javascript', { title: 'Javascripts Example', author: 'David'});
});


module.exports = router;
