'use strict';

/**
 * @ngdoc overview
 * @name angularGruntPhoneCatApp
 * @description
 * # angularGruntPhoneCatApp
 *
 * Main module of the application.
 */
angular
  .module('angularGruntPhoneCatApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
