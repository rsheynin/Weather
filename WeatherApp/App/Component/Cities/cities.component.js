'use strict';

// Define the `city` module
angular.module('cities').
component('cities', {
    templateUrl: '/App/Component/Cities/cities.html',
            controller: [
                '$http', function cityCtrl($http) {
                    var self = this;

                    self.GetCities = function () {
                        if (self.cityName.length < 3) {
                            return;
                        }
                        console.log(self.cityName);

                        $http.get('/api/Cities/GetCitiesByName/' + self.cityName).then(function (response) {
                            self.Cities = response.data;
                        });
                    };
                }
            ]
        }
    );