var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NavigationSchema = new mongoose.Schema({
	name: String,
	navItems: [{
		title: { type: String, required: true },
		subtitle: { type: String, required: true },
		location: { type: String, required: true }
	}],
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	locations: [{ type: Schema.Types.ObjectId, ref: 'NavLocation' }]
})

var Navigation = mongoose.model('Navigation', NavigationSchema);