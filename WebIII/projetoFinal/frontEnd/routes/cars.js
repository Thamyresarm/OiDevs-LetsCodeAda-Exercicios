var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
  res.render('cars-cadastrar');
});

router.get('/edit', function(req, res, next) {
  res.render('cars-editar');
});

router.get('/drop', function(req, res, next) {
  res.render('cars-deletar');
});

module.exports = router;
