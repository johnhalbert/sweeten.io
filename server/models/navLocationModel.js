var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NavLocationSchema = new mongoose.Schema({
	name: String,
	_nav: { type: Schema.ObjectId, ref: 'Navigation' },
	_setting: { type: Schema.ObjectId, ref: 'Setting'}
})

var NavLocation = mongoose.model('NavLocation', NavLocationSchema);