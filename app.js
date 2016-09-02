'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.home',
  'myApp.digital_desing',
  'myApp.developer_web',
  'myApp.sobre_mi',
  'myApp.contactame'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/inicio'});
  $.material.init();
}]);
