var express = require('express');
var router = express.Router();
//app.use('/javafunction',javafunctionRouter);

router.get('/Question1', function(req, res, next) {
  res.render('1javascriptexample/Question1', { author: 'David', title: 'Javascripts Leetcode Question 1'});
});



module.exports = router;
