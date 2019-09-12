var express = require('express');
var router = express.Router();

//router address localhost:2001/func_letctures/01
//descriptions: Lecutre One Javascript
//comments: 
router.get('/01', function(req, res, next) {
    res.render('functions/lectures/lecture01');
  });
  
  //router address localhost:2001/func_letctures/02
  //descriptions: Lecutre Two Javascript
  //comments: 
  router.get('/02', function(req, res, next) {
    res.render('functions/lectures/lecture02');
  });
  
  //router address localhost:2001/func_letctures/03
  //descriptions: Lecutre Three Javascript
  //comments: 
  router.get('/03', function(req, res, next) {
    res.render('functions/lectures/lecture03');
  });
  
  //router address localhost:2001/func_letctures/04
  //descriptions: Lecutre Four Javascript
  //comments: 
  router.get('/04', function(req, res, next) {
    res.render('functions/lectures/lecture04');
  });


module.exports = router;
