// JScript source code
(function () {
    var APP;
    APP = angular.module('app', []);
    APP.directive('byte', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                elm.attr('min', 0);
                elm.attr('max', 255);
                ctrl.$formatters.push(function ($modelValue) {
                    return parseInt($modelValue, 16);
                });
                return ctrl.$parsers.push(function ($viewValue) {
                    return _.str.lpad((+$viewValue).toString(16), 2, '0').toUpperCase();
                });
            }
        };
    });
    APP.controller('Ctrl', function ($scope) {
        $scope.r = 'FF';
        $scope.g = 'FF';
        $scope.b = 'FF';
        return $scope.getBackground = function () {
            return '#' + $scope.r + $scope.g + $scope.b;
        };
    });
}).call(this);