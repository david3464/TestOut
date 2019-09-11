var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('functions/2CartoonAnimation/3Time(Clock)Demo', { layout: 'hero_layout' });
});

module.exports = router;
