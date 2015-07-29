var mongoose = require('mongoose');

var NavigationSchema = new mongoose.Schema({
	name: String,
	navItems: [{
		title: { type: String, required: true },
		subtitle: { type: String, required: true },
		location: { type: String, required: true }
	}],
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
})

var Navigation = mongoose.model('Navigation', NavigationSchema);