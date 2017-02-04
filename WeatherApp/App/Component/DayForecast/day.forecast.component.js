'use strict';

angular.module('dayForecast')
    .component('dayForecast', {
        templateUrl: '/App/Component/DayForecast/day.forecast.html',
        controller: [function dayForecastCtrl() {
                var self = this;
                self.GetWeekDay = function (dateString) {
                    var date = new Date(dateString);
                    return date.getShortDayName();
                };

                self.GetImageName = function (description) {
                    if (!description)
                        return;
                    return WeatherDescriptionDictionary[description.toLowerCase()];
                };
            }
        ],
        bindings: {
            forecast: '<',
            weather:'<'
        }
    });



