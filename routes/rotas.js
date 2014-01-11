fs = require('fs');

//Utilizando layouts .jade

//Aparentemente, o res.render já cria um valor de statusCode para o response do HTTP (no caso, com código 200, se não houver erro). Para testar, pode utilizar res.render('layout.jade', {'title': res.statusCode});

exports.index = function(req, res){
	res.render('index.jade', {
		'title': 'Home', 
		'headTitle': 'Produzo',
	});
}

exports.contact = function(req, res){
	res.render('contact.jade', {
		'title': 'Contact',
		'headTitle': 'Entre em contato!'
	});
}

exports.about = function(req, res){
	res.render('about.jade', {
		'title': 'About',
		'headTitle': 'Sobre o Produzo'
	});
}