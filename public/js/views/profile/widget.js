define([
		'text!templates/profile/widget.html'
	],

	function(
			profileTemplate
		){

		var ProfileView = Backbone.View.extend({

			el: '#profile',

			template: _.template(profileTemplate),

			events: {
				'click #logout-btn' : 'logout'
			},

			initialize: function() {
				this.model.bind('change', this.render, this);
			},

			serialize: function() {
				return this.model.toJSON();
			},

			logout: function() {
				$.ajax('logout').done(function(data){
					window.location.hash = 'index';
				});
			}

		});

		return ProfileView;

	});      