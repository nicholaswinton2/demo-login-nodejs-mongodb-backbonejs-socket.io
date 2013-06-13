
// Retorna a tela de login.
exports.requiresLogin = function(app){
	// Libera o acesso direto...
	// return function(req, res, next) {res.send(req.session.accountId); }

	return function(req, res, next){
		if (!req.isAuthenticated()) {
			res.send(401);
		} else {
			res.send(req.session.accountId);
		}
	};
};

exports.signin = function(req, res){};

exports.callbackLogin = function(req, res, next){
	res.render('callback_login');
};

exports.logout = function(req, res){
	req.logout();
	res.send(200);
}

// Retorna a informação do usuario logado
exports.getProfile = function(req, res){

	var user = null;

	switch (req.user.provider) {

		case 'facebook': 
			 user = {
				_id : req.user._id,
				provider_id : req.user.facebook.id,
				profile_picture : req.user.facebook.profile_picture,
				name : req.user.facebook.name,
				first_name : req.user.facebook.first_name,
				last_name : req.user.facebook.last_name,
				email : req.user.email,
				gender : req.user.facebook.gender,
				locale: req.user.facebook.locale,
				location: req.user.facebook.location.name
			};	
			break;
		case 'google':
			 user = {
				_id : req.user._id,
				provider_id : req.user.google.id,
				name : req.user.google.name,
				profile_picture: '',
				location: ''

			};
			break;

	}

	res.send(user);
};



		