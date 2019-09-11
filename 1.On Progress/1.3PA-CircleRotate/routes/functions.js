var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('functions/1PhotoAnimation/3CircleRotate', { layout: 'hero_layout' });
});

router.get('/decode', function(req, res, next) {
  res.render('functions/hooh', { layout: 'hero_layout' });
});



module.exports = router;
