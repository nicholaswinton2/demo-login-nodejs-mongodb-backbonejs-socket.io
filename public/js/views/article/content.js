define([
		'text!templates/article/content.html'	
	],

	function(
			contentTemplate
		){

		var ItemsView = Backbone.View.extend({

			el: '#content',

			template: _.template(contentTemplate)

		});

		return ItemsView;

	});      