var express = require('express');
var router = express.Router();

/* GET zoos page. */
router.get('/', function(req, res, next) {
  res.render('zoos', { title: 'Search Results Zoos' });
});

module.exports = router;