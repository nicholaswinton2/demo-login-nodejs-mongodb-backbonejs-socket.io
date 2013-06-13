define(['router', 'AppSockets'], function(router, appSockets){
	
	var initialize = function() {
		appSockets.initialize(router.socketEvents);
		checkLogin(runApplication);
	}

	var checkLogin = function(callback) {
		$.ajax('/authentication', {
			method: 'GET',
			success: function(data) {
				router.socketEvents.trigger('app:loggedin', data);
				return callback(true);
			},
			error: function(data) {			
				return callback(false);
			}
		});
	};	

	var runApplication = function(authenticated) {
		if (authenticated) {
			window.location.hash = 'home';
		} else {
			window.location.hash = 'index';
		}
		Backbone.history.start();
	};

	return {
		initialize: initialize
	}

});