const weatherController = require('../controllers/weatherController');

exports.routesConfig = function (app) {
	app.get('/v1/weather/:city', weatherController.getWeather);
	
};
