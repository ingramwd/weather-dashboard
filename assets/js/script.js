// my api key f95df33b8a4b905edf0dbd58e095f0f3

var getWeatherData = function (input) {

    // formate openweathermap api url
    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + input + "&units=Imperial&appid=f95df33b8a4b905edf0dbd58e095f0f3";

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

var citySearch = document.querySelector("#search-form");
var userInputEl = document.querySelector("#user-input");

var searching = function (event) {
    event.preventDefault();
    console.log(event)


    var cityName = userInputEl.ariaValueMax.trim();

    if (cityName) {
        getWeatherData(cityName);
        userInputEl.value = "";
    }
    else {
        alert("Please Search by City Name");
    }
};

userInputEl.addEventListener("submit", searching);