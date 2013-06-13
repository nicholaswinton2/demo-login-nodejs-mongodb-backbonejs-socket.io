exports.index = function(req, res){
	res.render('index');
};

// Verifica se a request tem permissão
exports.checkAuthentication = function(req, res, next){
	if (!req.isAuthenticated()) {
		console.log('Request não Autorizada!!!');
		res.send(401);
	} else {
		console.log('Request Autorizada!!!');
		next();
	}
};