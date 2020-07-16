const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

let currentPath = path.join(__dirname, 'static');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('static'));

app.use(function(req, res, next){
	let date = new Date();
	let data = date + ' ' + req.method + ' ' + req.url + '\n';
	fs.appendFile('logs.log', data, function(err){
		if(err){
			console.log(err);
		}
		else{

		}
	}); 
	next();
}); 

require('./routes')(app);

let port = '8080';
app.listen(port, function(){
	console.log('server started at: http://localhost:' + port);
});