'use strict';

angular.
  module('app').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/cities', {
          template: '<cities></cities>'
        }).
        when('/weather/:zip', {
          template: '<weather></weather>'
        }).
        otherwise('/cities');
    }
  ]);
