let express = require('express');
let app = express();
let fs = require('fs');
let nodemailer = require('nodemailer');
let bodyparser = require('body-parser');

let testEmail = nodemailer.createTestAccount();
let transporter = nodemailer.createTransport({ // тестовый ящик для отправки писем
	  host:'gmail',
      port: 587,
      secure: false,
      auth: {
        user: 'testmailIvanIvanov123@gamil.com',
        pass: '123456789A987654321'
      }
});

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
	let mailData = {
		from: req.body.email,
		to: 'aawtgtqsclnloxniys@ttirv.org', // тестовый ящик для приема писем
		subject: "Ну как там с деньгами?",
      	text: req.body.desc_text
	};

	let result = transporter.sendMail(mailData, function(err, res){
		if(err){
			console.log(err);
		}
		else{

		}
	});
});

let port = '8080';
app.listen(port);
console.log('server started at: http://localhost:' + port);