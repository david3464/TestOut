var express = require('express');
var router = express.Router();
//app.use('/javaphotoanimation/',photoanimationRouter);

router.get('/javascriptsbackgroundexample', function(req, res, next) {
    res.render('1javascriptexample/1photoanimation/1javascriptsBackgroundExample', { title: 'Javascripts Background Example'});
  });
  
  router.get('/2slideroatate', function(req, res, next) {
    res.render('1javascriptexample/1photoanimation/2sliderotate', { title: '3D图片切片滑块旋转动画DEMO演示'});
  });
  
  router.get('/3foldanimation', function(req, res, next) {
    res.render('1javascriptexample/1photoanimation/3foldanimation', { title: '3D图片折叠特效'});
  });
  
  router.get('/4albumnavigation', function(req, res, next) {
    res.render('1javascriptexample/1photoanimation/4albumnavigation', { title: '相册导航'});
  });
  
  router.get('/5shadeflip', function(req, res, next) {
    res.render('1javascriptexample/1photoanimation/5shadeflip', { title: '图片阴影翻转'});
  });
  
  router.get('/6', function(req, res, next) {
    res.render('1javascriptexample/1photoanimation/6', { title: 'Javascripts Example'});
  });
  
  router.get('/7', function(req, res, next) {
    res.render('1javascriptexample/1photoanimation/7', { title: 'Javascripts Example'});
  });
  
  router.get('/8', function(req, res, next) {
    res.render('1javascriptexample/1photoanimation/8', { title: 'Javascripts Example'});
  });


module.exports = router;
