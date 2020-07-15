let express = require('express');
let fs = require('fs');
let nodemailer = require('nodemailer');
let bodyparser = require('body-parser');

let app = express();

let urlencodedParser = bodyparser.urlencoded({extended: false});

let currentPath = __dirname + '/Bootstrap/';

app.use(function(req, res, next){
	let date = new Date();
	let data = date + ' ' + req.method + ' ' + req.url + '\n';
	fs.appendFile('logs.log', data, function(){}); 
	next();
}); 

app.use(express.static('Bootstrap'));

app.get('/', urlencodedParser, function(req, res){
	res.sendFile(currentPath + 'html.html');
});
app.post('/', urlencodedParser, function(req, res){
	let transporter = nodemailer.createTransport({ // тестовый ящик для отправки писем
	  	host:'smtp.gmail.com',
      	port: 465,
      	secure: true,
      	auth: {
        	user: 'testmailIvanIvanov123@gmail.com',
        	pass: '123456789A987654321'
      }
	});

	let mailData = {
		from: req.body.email,
		to: 'dhktkzrttqvdhakqfi@awdrt.net', // тестовый ящик для приема писем
		subject: req.body.email,
      	text: req.body.desc_text
	};
	let result = transporter.sendMail(mailData, function(err, res){
		if(err){
			console.log(err);
		}
		else{

		}
	});

	res.sendFile(currentPath + 'html.html');
});

let port = '8080';
app.listen(port);
console.log('server started at: http://localhost:' + port);