var express = require('express');
var router = express.Router();

var adminLogin = 'admin';
var adminPassword = 'admin2';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Admin' });
});

router.post('/login', function(req, res, next) {
  const {login, password} = req.body;
  console.log(req.body)
  if(login === adminLogin && password === adminPassword) {
    req.session.admin = 1;
    res.redirect('/admin');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
