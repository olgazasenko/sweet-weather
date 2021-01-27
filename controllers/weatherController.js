const fetch = require('node-fetch');
const apiKey = "08739fc5060dd97e2075f6a5c0cdca51";

exports.getWeather = (req, res) => {
	const cityId = req.params.city;
	return fetch(`http://api.openweathermap.org/data/2.5/weather?id=2125072&appid=${apiKey}`)
		  .then(response => response.json())
		  .then(data => res.status(200).send(data))
		  .catch(err => console.log(`Could not fetch the weather data for city ${cityId}`, err));
};
