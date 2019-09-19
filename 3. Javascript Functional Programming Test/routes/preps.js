var express = require('express');
var router = express.Router();

//router address localhost:2001/func_preps/index
//descriptions: Prerequisite Course List
//comments: 
router.get('/index', function(req, res, next) {
  res.render('functions/preps/index');
});


//router address localhost:2001/func_preps/test
//descriptions: Test for Leetcode Problem
//comments: 
router.get('/test', function(req, res, next) {
  res.render('functions/preps/test');
});

//router address localhost:2001/func_preps/01
//descriptions: Prerequisite Course One
//comments: 
router.get('/01', function(req, res, next) {
    res.render('functions/preps/prep01');
});

//router address localhost:2001/func_preps/02
//descriptions: Prerequisite Course One
//comments: 
router.get('/02', function(req, res, next) {
  res.render('functions/preps/prep02');
});

//router address localhost:2001/func_preps/03
//descriptions: Prerequisite Course One 
//comments: 
router.get('/03', function(req, res, next) {
  res.render('functions/preps/prep03');
});

//router address localhost:2001/func_preps/04
//descriptions: Prerequisite Course One
//comments: 
router.get('/04', function(req, res, next) {
  res.render('functions/preps/prep04');
});


module.exports = router;
