require.config({
	paths: {
	
		// Funções Uteis
		Utils: '/js/libs/utils',

		// Bootstrap
		Bootstrap: '/js/libs/bootstrap',

		// Sockets
		Sockets: '/socket.io/socket.io',

		// Backbone 
		text: '/js/libs/text',
		jQuery: '/js/libs/jquery',
		Underscore: '/js/libs/underscore',
		Backbone: '/js/libs/backbone',
		'Backbone.Layout': '/js/libs/backbone.layoutmanager',
		
		// Aplicação
		models: 'models',
		templates: '../templates',

		
	},

	shim: {

		// Dependencias da aplicação
		'Bootstrap': ['jQuery'],
		'Backbone': ['Underscore', 'jQuery'],
		'Backbone.Layout': ['Backbone', 'jQuery', 'Underscore'],
		'App': ['Backbone', 'Backbone.Layout', 'Bootstrap', 'Utils']
	}
});


require(['App', 'require'], function(App){
	App.initialize();
});
