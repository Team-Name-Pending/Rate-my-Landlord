var express = require('express');
var router = express.Router();
var Post = require('../models/post');


/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Rate My Landlord' });
=======
  res.render('index', { title: 'Rate-My-Landlord' });
});

/*GET register page*/
router.get('/register', function(req, res, next) {
    res.render('register');
});

/*GET login page*/
router.get('/login', function(req, res, next) {
    res.render('login');
});

/*POST review*/
router.post('/addPost', function(req, res, next){
	
>>>>>>> 3c2a2d700ea93f8cacd367098009b0fa4bb8c075
});

module.exports = router;
