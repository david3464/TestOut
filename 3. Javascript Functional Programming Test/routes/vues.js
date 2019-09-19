var express = require('express');
var router = express.Router();

//router address localhost:2001/func_vues/index
//descriptions: Vue Course One List
//comments: 
router.get('/index', function(req, res, next) {
  res.render('functions/vues/index');
});

//router address localhost:2001/func_vues/01
//descriptions: Vue Course One
//comments: 
router.get('/01', function(req, res, next) {
  res.render('functions/vues/vue01');
});

module.exports = router;