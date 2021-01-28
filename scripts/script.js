const API_URL = "https://sweetweather.herokuapp.com";

document.addEventListener('DOMContentLoaded', () => {
	const showButton = document.querySelector('.show-weather');
	const cityInput = document.querySelector('.city-input');
	const temp = document.querySelector('.temp');
	const feelsLike = document.querySelector('.feels-like');
	const humidity = document.querySelector('.humidity');
	
	showButton.disabled = true;
	
	showButton.addEventListener('click', () => {
		showWeather();
	});

	cityInput.addEventListener('keyup', (event) => {
		if (event.keyCode === 13) {
			showWeather();
		} else if (cityInput.value.length > 0) {
			showButton.disabled = false;
		} else {
			showButton.disabled = true;
		}
	});
	
	
	const showWeather = async () => {
		clearResults();
		const response = await fetch(`${API_URL}/v1/weather/${cityInput.value}`, {
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
	
	const children = Array(7);
	children[0] = title;
	children[1] = document.createElement('h4');
	children[1].textContent = data.weather[0].main + ", " + data.weather[0].description;

	let i = 2;
	while (i < 7) {
		children[i] = p();
		i++;
	}
	children[2].textContent = "Temperature: " + data.main.temp + "\u00B0 C";
	children[3].textContent = "Feels like: " + data.main.feels_like + "\u00B0 C";
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