const fetch = require('node-fetch');
require("dotenv").config();

exports.getWeather = (req, res) => {
	const cityName = req.params.city;
	return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric`)
		  .then(response => response.json())
		  .then(data => res.status(200).send(data))
		  .catch(err => console.log(`Could not fetch the weather data for city ${cityName}`, err));
};
