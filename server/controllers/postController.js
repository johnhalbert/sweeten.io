var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');

module.exports = {
	retrievePost: function(req, res){
		Post.findOne({_id: req.params.postid}, function(err, post){
			if (err) {
				console.log('Error retrieving post', err);
			} else {
				res.json(post);
			}
		})
	},
	retrievePosts: function(req, res){
		Post.find({}, function(err, posts){
			if (err) {
				console.log('Error retrieving posts', err);
			} else {
				res.json(posts);
			}
		})
	},
	updatePost: function(req, res){
		if (req.user.id) {
			Post.findOne({_id: req.params.postid}, function(err, post){
				if (err) {
					console.log('Error updating post (1)', err);
				} else {
					post.title = req.body.title;
					post.body = req.body.body;
					post.tags = req.body.tags;
					post.categories = req.body.categories
					post.save(function(err, post){
						if (err) {
							console.log('Error updating post (2)', err);
						} else {
							res.json(post);
						}
					})
				}
			})
		} else {
			res.json({error: 'You must be logged in to modify posts.'})
		}
	},
	createPost: function(req, res){
		if (req.user.id){
			var newPost = new Post({permalink: req.body.permalink, title: req.body.title, body: req.body.body, tags: req.body.tags, categories: req.body.categories, _user: req.user.id});
			newPost.save(function(err, post){
				if (err) {
					console.log('Error creating post', err);
				} else {
					User.findOne({_id: req.user.id}, function(err, user){
						if (err) {
							console.log('Error creating post (2)', err);
						} else {
							user.posts.push(post);
							user.save(function(err, user){
								if (err) {
									console.log('Error creating post (3)', err);
								} else {
									res.json(post);
								}
							})
						}
					})
				}
			})
		} else {
			res.json({error: 'You must be logged in to post.'})
		}
	},
	destroyPost: function(req, res){
		if (req.user.id) {
			Post.remove({_id: req.params.postid}, function(err, removed){
				if (err) {
					console.log('Error removing post (1):', err);
				} else {
					Post.find({}, function(err, posts){
						if (err) {
							console.log('Error removing post (2):', err);
						} else {
							res.json(posts);
						}
					})
				}
			})
		} else {
			res.json({error: 'You must be logged in to modify posts.'})
		} 
	}
}