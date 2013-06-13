/*
 * Script inicializador...
 */
 
var fs 			= require('fs');

var express 	= require('express'),
	socket 		= require('socket.io'),		
	passport	= require('passport'),
	events 		= require('events');

// Carrega as configurações.
var config 		= require('./config/config'),
	mongoose 	= require('mongoose');

/*
 * Configuração do banco.
 */

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o banco: '));
db.once('open', function callback () {
	console.log('[MongoDB] OK - Conexão');
});

// Bootstrap dos models
var models_path = __dirname + '/app/models';
fs.readdirSync(models_path).forEach(function (file) {
	require(models_path+'/'+file)
})


// Configurações do PassportJS.
require('./config/passport')(passport, config);

var app = express();

// Configurações do ExpressJS.
require('./config/express')(app, config, passport);

// Carrega as rotas
require('./config/routes')(app, passport);


// Adiciona ao app as funções de eventos.
var eventDispatcher = new events.EventEmitter();

app.addEventListener = function ( eventName, callback ) {
	eventDispatcher.on(eventName, callback);
};
app.triggerEvent = function( eventName, eventOptions ) {
	eventDispatcher.emit( eventName, eventOptions );
};
app.removeEventListener = function( eventName, callback ) {
	eventDispatcher.removeListener( eventName, callback );	
};


// Sobe o servidor.
var server = app.listen(3000);

// Ativa escuta do Socket.IO e torna "global" o acesso.
io = socket.listen(server);

server.listen(app.get('port'), function(){
	console.log("[Server][Express] OK - Porta: " + app.get('port'));
});