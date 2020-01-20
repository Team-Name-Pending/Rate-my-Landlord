var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET register page*/
router.get('/register', function(req, res, next) {
    res.render('register');
});

/*GET login page*/
router.get('/login', function(req, res, next) {
    res.render('login');
});

module.exports = router;
