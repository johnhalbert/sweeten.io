// Require Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Post Schema
var PostSchema = new mongoose.Schema({
	_user: { type: Schema.ObjectId, ref: 'User' },
	permalink: { type: String, required: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	title: { type: String, required: true },
	body: { type: String, required: true },
	tags: [{type: String}],
	categories: [{type: String}]
});

// Create Post Model
var Post = mongoose.model('Post', PostSchema);