'use strict';

angular.module('app').directive('linechart', function () {

    return {

        // required to make it work as an element
        restrict: 'E',
        template: '<div></div>',
        replace: true,

        // observe and manipulate the DOM
        link: function ($scope, element, attrs) {
            $scope.$watchGroup([
                '$ctrl.' + attrs.data,
                '$ctrl.' + attrs.xkey,
                '$ctrl.' + attrs.ykeys,
                '$ctrl.' + attrs.labels,
                '$ctrl.' + attrs.lineColors
            ], function () {
                if (!$scope.$ctrl[attrs.data]) {
                    return;
                }
                
                var data = $scope.$ctrl[attrs.data],
                    xkey = $scope.$ctrl[attrs.xkey],
                    ykeys = $scope.$ctrl[attrs.ykeys],
                    lineColors = $scope.$ctrl[attrs.linecolors],
                    labels = $scope.$ctrl[attrs.labels];
                
                    Morris.Line({
                    element: element,
                    data: data,
                    xkey: xkey,
                    ykeys: ykeys,
                    labels: labels,
                    xLabelFormat: function(x) {
                        return x.getDate();
                    },
                    hideHover: true,
                    lineColors: lineColors,
                    fillOpacity:0.3
                });
               
            });

        }

    };

});
