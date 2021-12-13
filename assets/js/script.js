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

    var day2date = document.querySelector(".day2date");
    var day2temp = document.querySelector('.day2temp');
    var day2humidity = document.querySelector('.day2humidity');
    var day2wind = document.querySelector('.day2wind');

    var date2 = moment().add(2, 'days').format('L');
    var temp2 = data.list[2].main.temp;
    var humid2 = data.list[2].main.humidity;
    var wind2 = data.list[2].wind.speed;

    day2date.innerHTML = date2;
    day2temp.innerHTML = "Temperature: " + temp2 + "°F";
    day2humidity.innerHTML = "Humidity: " + humid2 + "%";
    day2wind.innerHTML = "Wind: " + wind2 + "mph";


    var day3date = document.querySelector(".day3date");
    var day3temp = document.querySelector('.day3temp');
    var day3humidity = document.querySelector('.day3humidity');
    var day3wind = document.querySelector('.day3wind');

    var date3 = moment().add(3, 'days').format('L');
    var temp3 = data.list[3].main.temp;
    var humid3 = data.list[3].main.humidity;
    var wind3 = data.list[3].wind.speed;

    day3date.innerHTML = date3;
    day3temp.innerHTML = "Temperature: " + temp3 + "°F";
    day3humidity.innerHTML = "Humidity: " + humid3 + "%";
    day3wind.innerHTML = "Wind: " + wind3 + "mph";


    var day4date = document.querySelector(".day4date");
    var day4temp = document.querySelector('.day4temp');
    var day4humidity = document.querySelector('.day4humidity');
    var day4wind = document.querySelector('.day4wind');

    var date4 = moment().add(4, 'days').format('L');
    var temp4 = data.list[4].main.temp;
    var humid4 = data.list[4].main.humidity;
    var wind4 = data.list[4].wind.speed;

    day4date.innerHTML = date4;
    day4temp.innerHTML = "Temperature: " + temp4 + "°F";
    day4humidity.innerHTML = "Humidity: " + humid4 + "%";
    day4wind.innerHTML = "Wind: " + wind4 + "mph";


    var day5date = document.querySelector(".day5date");
    var day5temp = document.querySelector('.day5temp');
    var day5humidity = document.querySelector('.day5humidity');
    var day5wind = document.querySelector('.day5wind');

    var date5 = moment().add(5, 'days').format('L');
    var temp5 = data.list[5].main.temp;
    var humid5 = data.list[5].main.humidity;
    var wind5 = data.list[5].wind.speed;

    day5date.innerHTML = date5;
    day5temp.innerHTML = "Temperature: " + temp5 + "°F";
    day5humidity.innerHTML = "Humidity: " + humid5 + "%";
    day5wind.innerHTML = "Wind: " + wind5 + "mph";

};


