$(function () {
    function loadTemplate(url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.send(null);
            xhr.onload = function () {
                resolve(xhr.responseText);
            }
        })
    }
    $("#city_input").on("keypress", function (event) {
        if (event.key == "Enter") {
            var city = $("#city_input").val();
            showWeather(city);
        }

    })

    function showWeather(city) {
        var template = "weatherTemplate.htm";

        function putTemplate(template, city) {
            loadTemplate(template).then(function (templateText) {
                var templateFunc = Handlebars.compile(templateText);
                var container = $("main");
                container.empty();
                requestWeather(city).then(function (result) {
                    container.html(templateFunc(result));
                })
            })
        }
        putTemplate(template, city);
    }

    function requestWeather(city) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f631fd357c75163a46154773a513dd64';
            xhr.open("GET", url, true);
            xhr.send(null);
            xhr.onload = function () {
                var response = xhr.responseText;
                var weatherData = JSON.parse(response);
                var result = {
                    weather: weatherData.weather[0].description,
                    pressure: weatherData.main.pressure,
                    icon: weatherData.weather[0].icon,
                    wind: weatherData.wind.speed
                }
                resolve(result);
            }
        })
    }
})