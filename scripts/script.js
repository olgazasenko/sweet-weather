const API_URL = "http://localhost:3000";

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
		const response = await fetch(`${API_URL}/v1/weather/${cityInput.value}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		temp.textContent = data.main.temp;
		feelsLike.textContent = data.main.feels_like;
		humidity.textContent = data.main.humidity;
	};
});