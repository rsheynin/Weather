'use strict';

angular.module('weeklyForecastGraph')
    .component('weeklyForecastGraph', {
        templateUrl: '/App/Component/WeeklyForecastGraph/weekly.forecast.graph.html',
        controller: [function weeklyForecastGraphCtrl() {
                var self = this;
                
            //TODO: the graph data it not corect, in the image we can see that the graph for current day and the time of this day
            //TODO: The graph display weekly temperature  
                self.GetGraphByType = function (selectedGraph) {
                    angular.element('#linechart').empty();
                    self.xkey = 'Date';
                    switch (selectedGraph) {
                        case "Temperature":

                            self.tempBtn = "ksb _pMb ksbs";
                            self.precipBtn = "ksb _oMb _pMb";
                            self.windBtn = "ksb _oMb";

                            self.ykeys = ['DaytimeHigh', 'MorningLow'];

                            self.labels = ['MorningLow', 'DaytimeHigh'];

                            self.lineColors = ['red','yellow'];
                            break;
                        case "Precipitation":

                            self.tempBtn = "ksb _oMb _pMb ";
                            self.precipBtn = "ksb _pMb ksbs ";
                            self.windBtn = "ksb _oMb";

                            self.ykeys = ['ProbabilityOfPrecipiation'];

                            self.labels = ['Probability O fPrecipiation'];

                            self.lineColors = ['blue'];
                            break;
                        
                        default:
                            alert("An error accrued...., No wind data! ");
                    }
                }
                self.GetGraphByType("Temperature");
            }
        ],
        bindings: {
            weeklyforecast: '<'
        }
    });



