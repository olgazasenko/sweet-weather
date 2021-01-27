/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
eval("\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\tconst showButton = document.querySelector('.show-weather');\r\n\tconst cityInput = document.querySelector('.city-input');\r\n\tconst temp = document.querySelector('.temp');\r\n\tconst feelsLike = document.querySelector('.feels-like');\r\n\tconst humidity = document.querySelector('.humidity');\r\n\t\r\n\tshowButton.disabled = true;\r\n\t\r\n\tshowButton.addEventListener('click', () => {\r\n\t\tshowWeather();\r\n\t});\r\n\r\n\tcityInput.addEventListener('keyup', (event) => {\r\n\t\tif (event.keyCode === 13) {\r\n\t\t\tshowWeather();\r\n\t\t} else if (cityInput.value.length > 0) {\r\n\t\t\tshowButton.disabled = false;\r\n\t\t} else {\r\n\t\t\tshowButton.disabled = true;\r\n\t\t}\r\n\t});\r\n\t\r\n\t\r\n\tconst showWeather = async () => {\r\n\t\tconst url = \"http://localhost:3000\";\r\n\t\tconst response = await fetch(`${url}/weather/${cityInput.value}`, {\r\n\t\t\tmethod: 'GET',\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t}\r\n\t\t});\r\n\t\tconst data = await response.json();\r\n\t\ttemp.textContent = data.main.temp;\r\n\t\tfeelsLike.textContent = data.main.feels_like;\r\n\t\thumidity.textContent = data.main.humidity;\r\n\t};\r\n});\n\n//# sourceURL=webpack://sweet-weather/./scripts/script.js?");
/******/ })()
;