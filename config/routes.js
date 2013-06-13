
/*
 *	Define as rotas e seus destinos.
 */

// Models
var mongoose	= require('mongoose'),
	User		= mongoose.model('User');

module.exports = function (app, passport) {

	// Controles
	var routes 		= require('../app/controllers/'),
		user		= require('../app/controllers/user');
	
	// Rotas Acessiveis
	app.get('/', routes.index);
	app.get('/index', routes.index);
	app.get('/authentication', user.requiresLogin(app));

	// Autenticação Facebook 
	app.get('/login/facebook', passport.authenticate('facebook', { display: 'popup', scope: [ 'email', 'user_about_me'], failureRedirect: '/' }), user.signin);
	app.get('/login/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), user.callbackLogin);
	
	// Autenticação Google 
	app.get('/login/google', passport.authenticate('google', { failureRedirect: '/', scope: ['https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/userinfo.email'] }), user.signin)
	app.get('/login/google/callback', passport.authenticate('google', { failureRedirect: '/' }), user.callbackLogin)

	// Logout
	app.get('/logout', user.logout);


	app.get('/user/profile', routes.checkAuthentication, user.getProfile);	

}