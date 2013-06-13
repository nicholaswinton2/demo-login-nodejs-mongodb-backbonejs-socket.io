define([
	'App'
	], 

	function(
		App
		) {

		var Profile = Backbone.Model.extend({
			urlRoot: '/user/profile'
		});

		return Profile;
	});