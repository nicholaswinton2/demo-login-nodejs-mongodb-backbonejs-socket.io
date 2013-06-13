define([
		'App',
		'text!templates/profile/content.html'
	],

	function(
			App,
			contentTemplate
		){

		return Backbone.View.extend({

			el: '#content',

			template: _.template(contentTemplate),

			events: {
				
			}

		});

	});      