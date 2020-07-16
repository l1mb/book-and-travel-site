const aboutRoute = require('./about_route.js');
const redirectRoute = require('./redirect_route.js');

module.exports = function(app){
	aboutRoute(app);
	redirectRoute(app);
}