const express = require('express');
const router = express.Router();

const Team = require('../models/Post');


// define the home page route
router.get('/', (req, res) => {

	Team.find({}, (err, teams) =>{
		if(err) {
			console.log('There was an ERROR!');
		} else{
			console.log(teams);
			res.render('home', { teams });
		}
	})
});

// define the about route
router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/newpost', (req, res) => {
	res.render('newpost');
});

router.post('/', (req, res) => {

	const { name } = req.body;

	if(!name) {
		return res.redirect('/newpost')
	}

	const newPost = new Post({
		name,
	});

	newPost.save();

	res.redirect('/');

});

module.exports = router;
