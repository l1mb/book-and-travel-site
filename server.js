let express = require('express');
let app = express();
let fs = require('fs');

let currentPath = __dirname + '/Bootstrap/';

app.use(function(req, res, next){
	let date = new Date();
	let data = date + ' ' + req.method + ' ' + req.url + '\n';
	fs.appendFile('logs.log', data, function(){}); 
	next();
}); 

app.use(express.static('Bootstrap'));

app.get('/', function(req, res){
	res.sendFile(currentPath + 'html.html');
});

let port = '8080';
app.listen(port);
console.log('server started at: http://localhost:' + port);