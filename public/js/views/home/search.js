define([
		'text!templates/home/search.html'
	],

	function(
			searchTemplate
		){

		var SearchView = Backbone.View.extend({

			el: '#search',

			template: _.template(searchTemplate)

		});

		return SearchView;

	});      