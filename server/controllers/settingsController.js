var mongoose = require('mongoose');
var Setting = mongoose.model('Setting');
var NavLocation = mongoose.model('NavLocation');
var Navigation = mongoose.model('Navigation');

module.exports = {
	updateSettings: function(req, res){
		if (req.user) {
			Setting.findOne({}, function(err, settings){
				if (err) {
					console.log('Error updating settings (1)', err);
				} else {
					settings.openReg = req.body.openReg;
					settings.siteName = req.body.siteName;
					settings.baseURL = req.body.baseURL;
					settings.navLocations = req.body.navLocations;
					settings.save(function(err, settings){
						if (err) {
							console.log('Error updating settings (2)', err);
						} else {
							res.json(settings);
						}
					})
				}
			})
		} else {
			res.json({error: 'You must be logged in to access site settings.'});
		}
	},
	retrieveSettings: function(req, res){
		if (req.user) {
			Setting.findOne({})
				.populate('navLocations')
				.exec(function(err, settings){
					if (err) {
						console.log('Error retrieving settings (1)', err);
					} else {
						settings.populate({
							path: 'navLocations._nav',
							model: 'Navigation'
						}, function(err, populatedSettings){
							if (err) {
								console.log('Error retrieving settings (2)', err);
							} else {
								res.json(populatedSettings);
							}
						})
					}
				})
		} else {
			res.json({error: 'You must be logged in to access site settings.'});
		}
	},
	createLocation: function(req, res){
		if (req.user) {
			var newNavLocation = new NavLocation({name: req.body.name, _setting: req.body.setting_id});
			newNavLocation.save(function(err, navLocation){
				if (err) {
					console.log('Error creating new nav location (1)', err);
				} else {
					Setting.findOne({_id: req.body.setting_id}, function(err, settings){
						if (err) {
							console.log('Error creating new nav location (2)', err);
						} else {
							settings.navLocations.push(navLocation._id);
							settings.save(function(err, settings){
								if (err) {
									console.log('Error creating new nav location (3)', err);
								} else {
									res.json(navLocation);
								}
							})
						}
					})
				}
			})
		} else {
			res.json({error: 'You must be logged in to access site settings.'});
		}
	},
	retrieveLocations: function(req, res){
		if (req.user) {
			NavLocation.find({}, function(err, navLocations){
				if (err) {
					console.log('Error retrieving nav locations', err);
				} else {
					res.json(navLocations);
				}
			})
		} else {
			res.json({error: 'You must be logged in to access site settings.'})
		}
	},
	destroyLocation: function(req, res){
		NavLocation.remove({_id: req.body.navLocation_id}, function(err, navLocation){
			if (err) {
				console.log('Error removing nav location');
			} else {
				res.json(navLocation);
			}
		})
	},
	updateLocation: function(req, res){
		NavLocation.find({}, function(err, locations){
			if (err) {
				console.log('Error saving location (1)', err);
			} else {
				for (var i = 0; i < locations.length; i++) {
					var location = locations[i];
					console.log(location);					
					for (var j = 0; j < req.body.navLocations.length; j++) {
						if (req.body.navLocations[j]._id == location._id) {
							location.name = req.body.navLocations[j].name;
							if (req.body.navLocations[j].nav) {
								location._nav = req.body.navLocations[j].nav;
							}
						}
					}
					location.save(function(err, updatedLocation) {
						if (err) {
							console.log('Error saving location (2)', err);
						}
					})
				}
			}
			
		})
		Navigation.find({}, function(err, navigations){
			if (err) {
				console.log('Error saving location (3)', err);
			} else {
				for (var k = 0; k < navigations.length; k++) {
					var navigation = navigations[k];
					for (var l = 0; l < req.body.navLocations.length; l++) {
						if (req.body.navLocations[l].nav && req.body.navLocations[l].nav == navigation._id) {
							navigation.locations.push(req.body.navLocations[l]._id);
						}
					}
					navigation.save(function(err, navigation){
						if (err) {
							console.log('Error saving location (4)', err);
						}
					})
				}
			}
		})
	}
}