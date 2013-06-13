define([
		'text!templates/home/menu.html'
	],

	function(
			menuTemplate
		){

		var MenuView = Backbone.View.extend({

			el: '#menu',

			template: _.template(menuTemplate)

		});

		return MenuView;

	});      