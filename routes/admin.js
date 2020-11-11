var express = require('express');
var router = express.Router();
var News = require('../models/news');


router.all('*', (req, res, next) => {
  if(!req.session.admin) {
    res.redirect('/login');
  } else {
    next();
  }
});


router.get('/', function(req, res, next) {
  News.find({}, (err, data) => {
    console.log(data);
    res.render('admin/index', { title: 'Admin', data });
  });
});

router.get('/news/add', function(req, res, next) {
  res.render('admin/news_form', { title: 'Admin', body: {} });
});

router.post('/news/add', function(req, res, next) {
  const {title, description} = req.body;

  const newsData = new News({
    title: title,
    description: description
  })
  const errors = newsData.validateSync();

  newsData.save(err => {
    if(err) {
      res.render('admin/news_form', { title: 'Admin', errors, body: req.body });
      return;
    } else {
      res.redirect('/admin');
    }
  });

});

router.get('/news/delete/:id', function(req, res) {
  News.findByIdAndDelete(req.params.id, (err) => {
    res.redirect('/admin');
  });
});

module.exports = router;
