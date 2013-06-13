/*
 * Lib com funções uteis
 */

 define(function(){

 	var Utils = {};

 	// Cria um popup no centro da tela
 	Utils.popupCenter = function(url, width, height, name) {
		var left = (screen.width/2)-(width/2);
		var top = (screen.height/2)-(height/2);

		return window.open(url, name, "menubar=no,toolbar=no,status=no,width="+width+",height="+height+",toolbar=no,left="+left+",top="+top);
	};

	return Utils;

 });


