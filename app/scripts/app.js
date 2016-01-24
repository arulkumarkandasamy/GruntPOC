angular.module('gruntPhonecatApp', ['ngRoute', 'phonecatControllers'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'views/phone-list.html',
        controller: 'PhoneListController'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'views/phone-detail.html',
        controller: 'PhoneDetailController'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
