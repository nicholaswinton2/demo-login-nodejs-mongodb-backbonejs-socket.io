define([
		'text!templates/video/content.html'
	],

	function(
			videoContentTemplate
		){

		var VideoContentView = Backbone.View.extend({

			el: '#content',

			template: _.template(videoContentTemplate)

		});

		return VideoContentView;

	});      