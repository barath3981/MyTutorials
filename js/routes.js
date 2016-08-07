(function(angular){
  'use strict';
  var myApp = angular.module('WebTutorials');
  myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/homePage.html'
    })
    .state('courses', {
      url: '/courses',
      templateUrl: '/views/mainPage.html'
    });
  });
})(angular);
