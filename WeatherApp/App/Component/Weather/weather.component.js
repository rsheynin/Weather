'use strict';

angular.module('weather')
    .component('weather', {
        templateUrl: '/App/Component/Weather/weather.html',
        controller: [
            '$http', '$routeParams', '$location', function weatherCtrl($http, $routeParams, $location) {
                var self = this;

                $http.get('/api/Forecast/' + $routeParams.zip).then(function (response) {
                    if (!response.data) {
                        //TODO: This city has no information about the forecast
                        alert("No information is requested for the city");
                        $location.path('/cities');
                        return;
                    }
                    response.data.WeeklyForecast = self.MapWeekForecast(response.data.WeeklyForecast);
                    self.Weather = response.data;
                    self.SelectedDayIndex = 6;
                    self.WeeklyForecast = self.Weather.WeeklyForecast;

                });

                $http.get('/api/Cities/GetCityByZip/' + $routeParams.zip).then(function(response) {
                    self.City = response.data;
                });

                self.MapWeekForecast = function (weeklyForecast) {
                    for (var index in weeklyForecast) {
                        var date = new Date(weeklyForecast[index].Date);
                        weeklyForecast[index].DayOfMonth = date.getDate();
                    }
                    return weeklyForecast;
                }
                
            }
        ]
    });



