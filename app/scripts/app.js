'use strict';

/**
 * @ngdoc overview
 * @name workspaceTechnicityApp
 * @description
 * # workspaceTechnicityApp
 *
 * Main module of the application.
 */
angular
  .module('workspaceTechnicityApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/math', {
        templateUrl: 'views/math.html',
        controller: 'MathCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
