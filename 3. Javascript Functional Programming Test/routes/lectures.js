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

module.exports = router;
