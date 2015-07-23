// Require Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Post Schema
var PostSchema = new mongoose.Schema({
	_user: { type: Schema.ObjectId, ref: 'User' },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	title: String,
	body: String,
	tags: [{type: String}],
	categories: [{type: String}]
});

// Create Post Model
var Post = mongoose.model('Post', PostSchema);