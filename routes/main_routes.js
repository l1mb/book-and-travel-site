const nodemailer = require('nodemailer');
const path = require('path');

let currentPath = path.join(path.dirname(__dirname), 'static');

module.exports = function(app){
	app.get('/', function(req, res){
		res.sendFile(path.join(currentPath, 'html.html'));
	});
	app.post('/', function(req, res){
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
			to: 'example@example.com', // тестовый ящик для приема писем
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
		res.sendFile(path.join(currentPath, 'html.html'));
	});
}