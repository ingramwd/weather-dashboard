var apiKey = "f95df33b8a4b905edf0dbd58e095f0f3";
var submit = document.querySelector('.submit-btn')
var citySearch = document.querySelector("#search-form");
var userInputEl = document.querySelector("#user-input");
var nameEl = document.querySelector('#current-location');
var temp = document.querySelector('.temp');
var humid = document.querySelector('.humidity');
var wind = document.querySelector('.wind');


var displayCurrentWeather = function (data) {
    var cityName = data.city.name + " " + moment().format('L')
    var temperature = data.list[0]['main']['temp'];
    var humidity = data.list[0]['main']['humidity'];
    var windSpeed = data.list[0]['wind']['speed'];

    console.log(cityName);

    nameEl.textContent = cityName;
    temp.innerHTML = "Temperature: " + temperature + "°F";
    humid.innerHTML = "Humidity: " + humidity + "%";
    wind.innerHTML = "Wind: " + windSpeed + "mph";

    console.log(nameEl);
}

var searching = function (event) {
    event.preventDefault();
    console.log(event)
    getWeatherData(userInputEl.value);
    fiveDay(userInputEl.value);

};

var getWeatherData = function (input) {

    // formate openweathermap api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + apiKey + "&units=imperial";
    console.log(apiUrl);


    // make a request to the url
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayCurrentWeather(data);
                });
            }
            else {
                alert("Something Went Wrong")
            }
        })


};

citySearch.addEventListener("submit", searching);


var fiveDay = function (input) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + apiKey + "&units=imperial";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayFive(data);
                });
            }
            else {
                alert("Error something went Wrong")
            }
        });

    console.log(apiUrl);
    console.log("here it is");

}

var displayFive = function (data) {


    console.log(data.list[1]);
    var day1date = document.querySelector(".day1date");
    var day1temp = document.querySelector('.day1temp');
    var day1humidity = document.querySelector('.day1humidity');
    var day1wind = document.querySelector('.day1wind');

    var date1 = moment().add(1, 'days').format('L');
    var temp1 = data.list[1].main.temp;
    var humid1 = data.list[1].main.humidity;
    var wind1 = data.list[1].wind.speed;

    day1date.innerHTML = date1;
    day1temp.innerHTML = "Temperature: " + temp1 + "°F";
    day1humidity.innerHTML = "Humidity: " + humid1 + "%";
    day1wind.innerHTML = "Wind: " + wind1 + "mph";

}


