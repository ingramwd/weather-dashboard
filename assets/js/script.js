var apiKey = "f95df33b8a4b905edf0dbd58e095f0f3";
var submit = document.querySelector('.submit-btn')
var citySearch = document.querySelector("#search-form");
var userInputEl = document.querySelector("#user-input");
var nameEl = document.querySelector('#current-location');
var temp = document.querySelector('.temp');
var humid = document.querySelector('.humidity');
var wind = document.querySelector('.wind');

// var oneDay = document.querySelector('.1-days');
// var twoDay = document.querySelector('.2-days');
// var threeDay = document.querySelector('.3-days');
// var fourDay = document.querySelector('.4-days');
// var fiveDay = document.querySelector('.5-days');

var displayCurrentWeather = function (data) {
    var cityName = data['name']
    var temperature = data['main']['temp'];
    var humidity = data['main']['humidity'];
    var windSpeed = data['wind']['speed'];

    nameEl.innerHtml = cityName;
    temp.innerHTML = temperature + "°F";
    humid.innerHTML = humidity + "%";
    wind.innerHTML = windSpeed;
}

var searching = function (event) {
    event.preventDefault();
    console.log(event)
    getWeatherData(userInputEl.value);

};

var getWeatherData = function (input) {

    // formate openweathermap api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=Imperial&appid=" + apiKey;
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


// var fiveDay = function (input) {
//     var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=f95df33b8a4b905edf0dbd58e095f0f3";

//     fetch(apiUrl)
//         .then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (data) {
//                     displayFive(data);
//                 });
//             }
//             else {
//                 alert("Error something went Wrong")
//             }
//         });

// }

// var displayFive = function (data, name) {


// }


