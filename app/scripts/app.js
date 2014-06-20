'use strict';
angular.module('myApp', [])
  .controller('HomeController', function($scope) {
    $scope.barcode = '9002236311037';
  })
  .directive('barcode', function() {
    return {
      restrict: 'E',
      scope: {
        code: '='
      },
      compile: function (elem, attrs) {
        var canvas = angular.element(
          '<canvas width="300" height="200"></canvas>');
        elem.append(canvas);
        return function (scope, elem, attrs) {
          scope.$watch('code', function(newValue) {
            if (newValue) {
              canvas.EAN13(newValue.toString());
            }
          });
        };
      }
    };
  });
