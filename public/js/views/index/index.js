define([
		'text!templates/index/index.html',
		'Utils'
	],

	function(
			indexTemplate,
			Utils
		){

		var IndexView = Backbone.View.extend({

			el: '#app',

			template: _.template(indexTemplate),

			events: {
				'click #facebook-login-btn': 'facebook_login',
				'click #google-login-btn': 'google_login'
			},

			facebook_login: function(){
				Utils.popupCenter('login/facebook',	600, 400, 'Facebook Login');
			},

			google_login: function(){
				Utils.popupCenter('login/google', 600, 400, 'Google Login');
			}

		});

		return IndexView;

	});      