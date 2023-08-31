var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express FTW! BOO YAH! Deployed by commit' });
});

module.exports = router;
