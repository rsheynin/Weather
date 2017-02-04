(function () {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    Date.prototype.getMonthName = function () {
        return months[this.getMonth()];
    };
    Date.prototype.getDayName = function () {
        return days[this.getDay()];
    };
    Date.prototype.getShortDayName = function () {
        return shortDays[this.getDay()];
    };

})();

var WeatherDescriptionDictionary = {
    "cloudy": "cloudy",
    "partly cloudy": "partly_cloudy",
    "scattered showers": "rain_s_cloudy",
    "rain": "rain",
    "rainy": "rain_light",
    "showers": "rain_light",
    "sunny": "sunny",
    "snow with brief sleet": "snow",
    "snow showers": "snow_light",
    "fog": "fog"
}