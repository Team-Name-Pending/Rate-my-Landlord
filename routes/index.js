var express = require('express');
var router = express.Router();
//This file has changed!!
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
