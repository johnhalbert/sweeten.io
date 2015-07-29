// Require Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create User Schema
var UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	password: String,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	user_level: { type: Number, default: 0 },
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post'}]
});

// Create User Model
var User = mongoose.model('User', UserSchema);