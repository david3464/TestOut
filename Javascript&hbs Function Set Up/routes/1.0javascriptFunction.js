var express = require('express');
var router = express.Router();
//app.use('/javafunction',javafunctionRouter);

router.get('/javaphotoanimation', function(req, res, next) {
  res.render('1javascriptexample/1photoanimation/index', { author: 'David', title: 'Javascripts Photo Example'});
});

router.get('/javacartoonanimation', function(req, res, next) {
  res.render('1javascriptexample/2cartoonanimation/index', { author: 'David', title: 'Javascripts Cartoon Example'});
});

module.exports = router;
