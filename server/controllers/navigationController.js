var mongoose = require('mongoose');

var Navigation = mongoose.model('Navigation');

module.exports = {
	retrieveNav: function(req, res){
		Navigation.findOne({_id: req.body._id}, function(err, nav){
			if (err) {
				console.log('Error retrieving navigation');
			} else {
				res.json(nav);
			}
		})
	},
	retrieveNavs: function(req, res){
		Navigation.find({}, function(err, navs){
			if (err) {
				console.log('Error retrieving navs', err)
			} else {
				res.json(navs)
			}
		})
	},
	createNav: function(req, res){
		if (req.user.id) {
			var newNav = new Navigation({name: req.body.name, navItems: req.body.navItems})
			newNav.save(function(err, nav){
				if (err) {
					console.log('Error creating new nav', err);
				} else {
					res.json(nav);
				}
			})
		} else {
			res.json({error: "You must be logged in to edit navigation menus"});
		}
	},
	updateNav: function(req, res){
		if (req.user.id) {
			Navigation.findOne({_id: req.body._id}, function(err, nav){
				if (err) {
					console.log('Error updating navigation (1)', err);
				} else {
					if (req.body.action === "add") {
						for (var i = 0; i < req.body.navItems.length; i++) {
							nav.navItems.push(req.body.navItems[i]);
						}
						nav.save(function(err, nav){
							if (err) {
								console.log('Error updating navigation (2)', err);
							} else {
								res.json(nav);
							}
						})
					} else if (req.body.action === "remove") {
						for (var i = 0; i < req.body.navItems.length; i++) {
							nav.navItems.splice(nav.navItems.indexOf(req.body.navItems[i], 1))
						}
						nav.save(function(err, nav){
							if (err) {
								console.log('Error updating navigation (3)', err);
							} else {
								res.json(nav);
							}
						})
					}
				}
			})
		} else {
			res.json({error: "You must be logged in to edit navigation menus"});
		}
	}
}