var express = require('express');
var router = express.Router();
//app.use('/javafunction',javafunctionRouter);

router.get('/javaphotoanimation', function(req, res, next) {
  res.render('1javascriptexample/1photoanimation/index', { author: 'David', title: 'Javascripts Photo Example'});
});

module.exports = router;
