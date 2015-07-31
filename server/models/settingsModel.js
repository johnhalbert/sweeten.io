var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SettingSchema = new mongoose.Schema({
	openReg: Boolean,
	siteName: String,
	baseURL: String,
	navLocations: [{ type: Schema.Types.ObjectId, ref: 'NavLocation'}]
});

var Setting = mongoose.model('Setting', SettingSchema)