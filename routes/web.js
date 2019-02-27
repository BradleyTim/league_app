const express = require('express');
const router = express.Router();
const teams = require('../Teams');

// define the home page route
router.get('/', (req, res) => {
  res.render('home', { teams });
});
// define the about route
router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/newteam', (req, res) => {
	res.render('newteam');
});

module.exports = router;
