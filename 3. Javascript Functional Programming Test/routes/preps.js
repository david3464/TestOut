var express = require('express');
var router = express.Router();

//router address localhost:2001/func_preps/01
//descriptions: Preprequist Course One Javascript
//comments: 
router.get('/01', function(req, res, next) {
    res.render('functions/preps/lecture01');
  });


module.exports = router;
