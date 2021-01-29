# sweet-weather
The weather API to display the current weather in the specified city. Proxy server calls the <a href="https://openweathermap.org/current">Open Weather API</a> to get the real data.<br> 
Weather can be queried like so: curl https://sweetweather.herokuapp.com/v1/weather?city=ottawa. The returned data is in JSON format.
## Notes
Used JavaScript for the front-end and Node.js for the backend. JavaScript is fast, there is no compilation needed, and all browsers understand it. One disadvantage is that the source code is visible to everybody.<br>
I have very little experience with Node.js before and this was an awesome opportunity to get to know it better. The advantages of using Node.js is that it is also very fast, and there are thousands of packages available in npm to enhance it.
### Date
Jan 28, 2021
### Location of deployed application
https://sweetweather.herokuapp.com/
### Time spent
8hrs (really got into this project and could not stop)
### Assumptions made
- Just a simple API for fetching the current weather in the given city.
- User will access this website from a desktop - the website is not mobile friendly
- There are only a handful of users at a time - not scaled for heavy traffic 
- The name of the city will be spelled correctly 
- Users know what they are searching for - there is no autocomplete
- Only tested in Chrome browser
### Shortcuts/Compromises made
- UI could be much more elaborate - I left it for last in this case
- Used <a href="https://watercss.kognise.dev/">water.css</a> for quick styling
- I realled wanted to set the API_URL through an environment variable by using webpack and dotenv, but it didn't work out this time. Ideally it would set based on the mode - development or production.
### Stretch goals attempted
- simple UI
- deployed API
- proxied a real server<br>
I will add authentication in my own time (to a separate branch or project). It's something I've never done before and really want to try it out!
### Instructions to run assignment locally
- npm install
- change the API_URL in scripts/script.js to "http://localhost:3000"
- node index.js
### What did you not include in your solution that you want us to know about?
The weather API website recommends using the cityId instead of the city name for better accuracy. They provide a large JSON file of all the cities.
I would like to read it and get the city id from it. And I would like to figure out the best way to do it. For example, do we need to read this file every time a request comes in? Can we cache it? 
### Your feedback on this technical challenge
Really enjoyed this little project! It sparked my interest and I want to do more of these projects in my free time now.
