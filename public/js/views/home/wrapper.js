define([
		'text!templates/home/wrapper.html'
	],

	function(
			wrapperTemplate
		){

		return Backbone.View.extend({

			el: '#app',

			template: _.template(wrapperTemplate)

		});

	});      