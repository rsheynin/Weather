'use strict';

angular.module('weeklyDayForecast')
    .component('weeklyDayForecast', {
        templateUrl: '/App/Component/WeeklyDayForecast/weekly.day.forecast.html',
        controller: [function weeklyDayForecastCtrl() {
                var self = this;
               
                self.GetImageName = function (descrition) {
                    if (!descrition)
                        return;
                    return WeatherDescriptionDictionary[descrition.toLowerCase()];
                };

                self.GetWeekDay = function (dateString) {
                    var date = new Date(dateString);
                    return date.getShortDayName();
                };

            }
        ],
        bindings: {
            forecast: '<'
        }
    });



