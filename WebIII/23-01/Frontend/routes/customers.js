var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('customers', { escola: 'TESTE'});
});

module.exports = router;
