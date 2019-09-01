var express = require('express');
var router = express.Router();
//app.use('/1.2CA/',cartoonationRouter);

router.get('/javascriptsbackgroundexample', function(req, res, next) {
  res.render('1javascriptexample/2cartoonanimation/1javascriptsBackgroundExample', { title: 'Javascripts Background Example'});
});
  
router.get('/23Dcubeanimation-1', function(req, res, next) {
  res.render('1javascriptexample/2cartoonanimation/23Dcubeanimation-1', { title: '3D Cube Animation-1'});
});

router.get('/33Dcubeanimation-2', function(req, res, next) {
  res.render('1javascriptexample/2cartoonanimation/33Dcubeanimation-2', { title: '3D Cube Animation-2'});
});

module.exports = router;
