const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;