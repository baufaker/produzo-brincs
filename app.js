var express = require('express');
var routes = require('./routes/rotas.js');//quando dá require nessa pasta, puxa, automaticamente, o módulo index.js. Se quiser puxar outros módulos, tem que especificá-los. Ex: ./routes/module.js
var app = express();


//Rotas

//dá get em '/'(root) e, como callback, puxa a função 'index' exportada do arquivo 'index.js' que está em require './routes'.

app.get('/', routes.index);

app.get('/about', routes.about);

app.get('/contact', routes.contact);

//Set 404 route to node.js app

app.listen(8080);
console.log('Servidor rodando em localhost, porta 8080');