const express = require('express');
const router = express.Router();

const Post = require('../models/Post');


// define the home page route
router.get('/', (req, res) => {

	Post.find({}, (err, posts) =>{
		if(err) {
			console.log('There was an ERROR!');
		} else{
			console.log(posts);
			res.render('home', { posts });
		}
	})
});

// define the about route
router.get('/about', (req, res) => {
  res.render('about');
});

//new post form
router.get('/newpost', (req, res) => {
	res.render('newpost');
});

//add new post
router.post('/newpost', (req, res) => {

	const { text } = req.body;

	if(!text) {
		return res.redirect('/newpost')
	}

	const newPost = new Post({
		text,
	});

	newPost.save();

	res.redirect('/');

});

module.exports = router;
