// my api key f95df33b8a4b905edf0dbd58e095f0f3
var submit = document.querySelector('.submit-btn')
var citySearch = document.querySelector("#search-form");
var userInputEl = document.querySelector("#user-input");
var name = document.querySelector('.nme');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


var getWeatherData = function (input) {

    // formate openweathermap api url
    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + userInputEl.value + "&units=Imperial&appid=f95df33b8a4b905edf0dbd58e095f0f3";

    // make a request to the url
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                });
            }
            else {
                alert('Error: Something Went Wrong');
            }
        });

};



var searching = function (event) {
    event.preventDefault();
    console.log(event)


    var cityName = userInputEl;

    if (cityName) {
        getWeatherData(cityName);
        userInputEl.value = "";
    }
    else {
        alert("Please Search by City Name");
    }
};

citySearch.addEventListener("submit", searching);