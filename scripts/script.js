const API_URL = "https://sweetweather.herokuapp.com"; // ideally this should be set through an environment variable
const NUM_DISPLAY_ELEMENTS = 7;
const CELCIUS_SUFFIX = "\u00B0 C";

document.addEventListener('DOMContentLoaded', () => {
	const showWeatherButton = document.querySelector('.show-weather');
	const cityInput = document.querySelector('.city-input');
	
	showWeatherButton.disabled = true; // disable until the user enters something
	
	showWeatherButton.addEventListener('click', () => {
		showWeather();
	});

	cityInput.addEventListener('keyup', (event) => {
		if (event.code === 'Enter') {
			showWeather();
		} else if (cityInput.value.length > 0) {
			showButton.disabled = false;
		} else {
			showButton.disabled = true;
		}
	});
	
	
	const showWeather = async () => {
		clearResults(); // clear the results before showing new ones
		const cityName = cityInput.value;
		try {
			const response = await fetch(`${API_URL}/v1/weather?city=${cityName}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			if (data.cod === 200) {
				displayWeather(data);
			} else {
				displayError(data);
			}
		} catch (err) {
			console.log(`Could not fetch the weather for ${cityName} from the server`, err);
		}
	};
});

function displayWeather(data) {
	const title = document.createElement('div');
	title.setAttribute('id', 'results-title')
	
	const cityName = document.createElement('h3');
	cityName.textContent = data.name;
	const icon = document.createElement('img');
	icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	title.appendChild(cityName);
	title.appendChild(icon);
	
	const children = Array(NUM_DISPLAY_ELEMENTS);
	children[0] = title;
	children[1] = document.createElement('h4');
	if (data.weather.length > 0) {
		children[1].textContent = data.weather[0].main + ", " + data.weather[0].description;
	}

	for (let i = 2; i < NUM_DISPLAY_ELEMENTS; i++) {
		children[i] = p();
	}
	children[2].textContent = "Temperature: " + data.main.temp + CELCIUS_SUFFIX;
	children[3].textContent = "Feels like: " + data.main.feels_like + CELCIUS_SUFFIX;
	children[4].textContent = "Humidity: " + data.main.humidity + "%";
	children[5].textContent = "Pressure: " + data.main.pressure + " hPa";
	children[6].textContent = "Wind: " + data.wind.speed + " m/sec";
	
	const results = getResultsElement();
	const app = document.getElementById('root');
	app.appendChild(results);
	for (const el of children) {
		results.appendChild(el);
	}
}

function displayError(data) {
	const errorDiv = document.createElement('div');
	errorDiv.textContent = data.message;
	getResultsElement().appendChild(errorDiv);
}

function clearResults() {
	const results = getResultsElement();
	while (results.firstChild) {
		results.firstChild.remove();
	}
}

function getResultsElement() {
	return document.getElementById('results');
}
	

const p = () => {
	return document.createElement('p');
};