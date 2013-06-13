
/*
 * Objeto que contêm as configurações globais.
 */ 

module.exports = {
	root: require('path').normalize(__dirname + '/..'),
	app: {
		name: 'demo-login-nodejs-mongodb-backbonejs-socket.io'
	},
	db: 'mongodb://localhost/demologin',
	facebook: {
		clientID: "357582234354110",
		clientSecret: "4bde2d321e545e9cdfe1b0bed1dc0fcc",
		callbackURL: "http://localhost:3000/login/facebook/callback"
	},
	google: {
		clientID: "829859765072.apps.googleusercontent.com",
		clientSecret: "PfkWGnNJRI78AY7WSNm6Y0Nm",
		callbackURL: "http://localhost:3000/login/google/callback"
	}
}