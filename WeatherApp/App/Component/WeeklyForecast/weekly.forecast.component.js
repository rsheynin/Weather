'use strict';

angular.module('weeklyForecast')
    .component('weeklyForecast', {
        templateUrl: '/App/Component/WeeklyForecast/weekly.forecast.html',
        controller: [function weeklyForecastCtrl() {
                var self = this;
                
                self.SelectForcast = function (index) {
                    self.selecteddayindex = index;
                    //self.SelectedDayForecast = self.Weather.WeeklyForecast[index];
                };
            }
        ],
        bindings: {
            weeklyforecast: '<',
            selecteddayindex: '='
        }
    });



