var express = require('express');
var router = express.Router();
//app.use('/1.2CA/',cartoonationRouter);

//app.route: /1.2CA/javascriptsbackgroundexample
router.get('/javascriptsbackgroundexample', function(req, res, next) {
  res.render('1javascriptexample/2cartoonanimation/1javascriptsBackgroundExample', { title: 'Javascripts Background Example'});
});

//app.route: /1.2CA/2CoverFlipping
router.get('/2CoverFlipping', function(req, res, next) {
  res.render('1javascriptexample/2cartoonanimation/2CoverFlipping', { title: 'Cover Flipping'});
});


module.exports = router;
