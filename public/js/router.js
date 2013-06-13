define([

	// Views
	'views/index/index',

	'views/home/wrapper',
	'views/home/logo',
	'views/home/menu',
	'views/home/search',

	'views/profile/widget',
	'views/profile/content',

	'views/article/content',

	'views/video/content',

	// Models
	'models/Profile'


	], 

	function(

		// Views
		IndexView,
		WrapperView,
		LogoView,
		MenuView,
		SearchView,
		ProfileWidgetView,
		ProfileContentView,
		ArticleContentView,
		VideoContentView,

		// Models
		Profile

	){

		Backbone.Layout.configure({ manage: true });
		
		var Router = Backbone.Router.extend({

			currentView: null,

			socketEvents: _.extend({}, Backbone.Events),

			routes: {
				'index'				: 'index',
				'home'				: 'home',
				'article'			: 'article',
				'video'				: 'video'
			},

			buildStructure: function() {

				// Instancia view principal
				var wrapperView = new WrapperView();
				wrapperView.render();
				
				// Instancia Widgets Independentes  

				var logoView = new LogoView();
				logoView.render(); 

				var profile = new Profile();
				var profileWidgetView = new ProfileWidgetView({
					model: profile
				});
				profile.fetch();

				var menuView = new MenuView();
				menuView.render();

				var searchView = new SearchView();
				searchView.render();
			},


			// Função que carrega as views, limpando os eventos da view passada.
			changeView : function(view) {
				if ( null != this.currentView ) {
					this.currentView.$el.fadeOut();
					this.currentView.undelegateEvents();
				}

				this.currentView = view;
				this.currentView.render();
				this.currentView.$el.hide().fadeIn();
			},

			index : function(){
				this.changeView(new IndexView());
			},

			// Página pós-login
			home : function(){
				this.buildStructure();
				this.changeView(new ProfileContentView());
			},

			article : function(){
				this.changeView(new ArticleContentView());
			},

			video : function(){
				this.changeView(new VideoContentView());
			}

		});

		return new Router();
	}
);