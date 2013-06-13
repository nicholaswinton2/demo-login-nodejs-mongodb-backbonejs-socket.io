
var express 	= require('express'),
	path 		= require('path'),
	mongoStore	= require('connect-mongo')(express)

module.exports = function (app, config, passport) {

	 // Configuração do ExpressJS.
	app.configure(function(){
		app.set('swhoStackError', true);
		app.set('port', process.env.PORT || 3000);
		app.set('views', config.root + '/app/views');
		app.set('view engine', 'jade');

		app.use(express.compress({
			filter: function (req, res) {
				// console.log(res.getHeader('Content-Type'));
				return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
			},
			level: 9
		}));
		
		app.use(express.static(path.join(config.root, 'public')));
		app.use(express.favicon());
		app.use(express.logger('dev'));
		app.use(express.limit('1mb'));
		app.use(express.cookieParser('blah'));
		app.use(express.bodyParser());
		app.use(express.methodOverride());

		// Limpa a sessão
		app.use(express.session());

		// express/mongo session storage
		app.use(express.session({
			secret: 'itsfree',
			store: new mongoStore({
				url: config.db,
				collection : 'sessions'
			})
		}));

		app.use(passport.initialize());
		app.use(passport.session());

		// (Atenção) Roteador deve sempre ficar no final
		app.use(app.router);

		// assume "not found" in the error msgs
		// is a 404. this is somewhat silly, but
		// valid, you can do whatever you like, set
		// properties, use instanceof etc.
		app.use(function(err, req, res, next){
			// treat as 404
			if (~err.message.indexOf('not found')) return next()

			// log it
			console.error(err.stack)

			// error page
			res.status(500).render('500', { error: err.stack })
		})

		// assume 404 since no middleware responded
		app.use(function(req, res, next){
			res.status(404).render('404', { url: req.originalUrl })
		})
	});



	app.configure('development', function(){
		app.use(express.errorHandler());
	});
}

