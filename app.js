searchBtn.addEventListener('click', searchWeather);

function searchWeather() {
    loading.style.display = "block";
    weatherBox.style.display = "none";
   var cityName = searchInput.value;
   if(cityName.trim().lenght == 0) {
       alert('Please enter city name!');
   }
   var apiKey = 'adaa8fcfcb0287bd8394987d5f969ef5';
   var url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName + '&units=metric&appid=' +apiKey;
   var method = "GET";
   var http = new XMLHttpRequest();
    http.open(method, url);
    http.onreadystatechange = function() {
        if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new WeatherData(cityName, data.weather[0].description.toUpperCase());
            weatherData.temparature = data.main.temp;
            updateWeather(weatherData)
        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert("Something went wrong");
        }
    }
    http.send()
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temparature;
    weatherBox.style.display = "block";
    loading.style.display = "none"
}