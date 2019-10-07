var express = require('express');
var router = express.Router();

//router address localhost:2001/func_lectures/index
//descriptions: Lecture List
//comments: 
router.get('/index', function(req, res, next) {
  res.render('functions/lectures/index');
});

//router address localhost:2001/func_lectures/01
//descriptions: Lecture One Javascript
//comments: 
router.get('/01', function(req, res, next) {
    res.render('functions/lectures/lecture01');
  });
  
  //router address localhost:2001/func_lectures/02
  //descriptions: Lecture Two Javascript
  //comments: 
  router.get('/02', function(req, res, next) {
    res.render('functions/lectures/lecture02');
  });
  
  //router address localhost:2001/func_lectures/03
  //descriptions: Lecture Three Javascript
  //comments: 
  router.get('/03', function(req, res, next) {
    res.render('functions/lectures/lecture03');
  });
  
  //router address localhost:2001/func_lectures/04
  //descriptions: Lecture Four Javascript
  //comments: 
  router.get('/04', function(req, res, next) {
    res.render('functions/lectures/lecture04');
  });

  //router address localhost:2001/func_lectures/05
  //descriptions: Lecture Five Javascript
  //comments: 
  router.get('/05', function(req, res, next) {
    res.render('functions/lectures/lecture05');
  });

  //router address localhost:2001/func_lectures/06
  //descriptions: Lecture Six Javascript
  //comments: 
  router.get('/06', function(req, res, next) {
    res.render('functions/lectures/lecture06');
  });

  //router address localhost:2001/func_lectures/07
  //descriptions: Lecture Seven Javascript
  //comments: 
  router.get('/07', function(req, res, next) {
    res.render('functions/lectures/lecture07');
  });

  //router address localhost:2001/func_lectures/08
  //descriptions: Lecture Eight Javascript
  //comments: 
  router.get('/08', function(req, res, next) {
    res.render('functions/lectures/lecture08');
  });

  //router address localhost:2001/func_lectures/09
  //descriptions: Lecture Nine Javascript
  //comments: 
  router.get('/09', function(req, res, next) {
    res.render('functions/lectures/lecture09');
  });

  //router address localhost:2001/func_lectures/10
  //descriptions: Lecture Ten Javascript
  //comments: 
  router.get('/10', function(req, res, next) {
    res.render('functions/lectures/lecture10');
  });

  //router address localhost:2001/func_lectures/11
  //descriptions: Lecture Eleven Javascript
  //comments: 
  router.get('/11', function(req, res, next) {
    res.render('functions/lectures/lecture11');
  });

  //router address localhost:2001/func_lectures/12
  //descriptions: Lecture Twelve Javascript
  //comments: 
  router.get('/12', function(req, res, next) {
    res.render('functions/lectures/lecture12');
  });

  //router address localhost:2001/func_lectures/13
  //descriptions: Lecture Thirteen Javascript
  //comments: 
  router.get('/13', function(req, res, next) {
    res.render('functions/lectures/lecture13');
  });

  //router address localhost:2001/func_lectures/14
  //descriptions: Lecture Fourteen Javascript
  //comments: 
  router.get('/14', function(req, res, next) {
    res.render('functions/lectures/lecture14');
  });

  //router address localhost:2001/func_lectures/15
  //descriptions: Lecture Fifteen Javascript
  //comments: 
  router.get('/15', function(req, res, next) {
    res.render('functions/lectures/lecture15');
  });

  //router address localhost:2001/func_lectures/16
  //descriptions: Lecture Sixteen Javascript
  //comments: 
  router.get('/16', function(req, res, next) {
    res.render('functions/lectures/lecture16');
  });

  //router address localhost:2001/func_lectures/17
  //descriptions: Lecture Seventeen Javascript
  //comments: 
  router.get('/17', function(req, res, next) {
    res.render('functions/lectures/lecture17');
  });

    //router address localhost:2001/func_lectures/18
  //descriptions: Lecture Eighteen Javascript
  //comments: 
  router.get('/18', function(req, res, next) {
    res.render('functions/lectures/lecture18');
  });

    //router address localhost:2001/func_lectures/19
  //descriptions: Lecture 19 Javascript
  //comments: 
  router.get('/19', function(req, res, next) {
    res.render('functions/lectures/lecture19');
  });


module.exports = router;
