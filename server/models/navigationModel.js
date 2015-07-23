var mongoose = require('mongoose');

var NavigationSchema = new mongoose.Schema({
	title: String,
	subtitle: String,
	order: Number
})

var Navigation = mongoose.model('Navigation', NavigationSchema);