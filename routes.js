var express = require('express');
var router = express.Router();
var Meme = require('./models/meme')


router.get('/', (req, res) => {
  res.render('index.ejs')
});

//rest of routes go here


module.exports = router