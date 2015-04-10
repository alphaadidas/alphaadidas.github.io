'use strict';

/**
 * @ngdoc function
 * @name workspaceTechnicityApp.controller:MathCtrl
 * @description
 * # MathCtrl
 * Controller of the workspaceTechnicityApp
 */
angular.module('workspaceTechnicityApp')
  .controller('MathCtrl', function ($scope) {
    $scope.numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    $scope.isDivisible = function(num) {
      var result = "Divisible by ";

      var by3 = false;
      var by5 = false;

      if(num % 3 == 0){
        by3 = true;
      }
      if(num %5 == 0){
        by5 = true;
      }

      if(by3 && by5){
        result = result + "both 3 and 5"
      }else if (!by3 && !by5){
        result = result + "neither 3 or 5"
      }else {
        if(by3){
          result = result + "3"
        }

        if(by5){
          result = result + "5"
        }
      }


      return result;
    }

  });
