define([
		'text!templates/home/logo.html'
	],

	function(
			logoTemplate
		){

		return Backbone.View.extend({

			el: '#logo',

			template: _.template(logoTemplate)

		});

	});