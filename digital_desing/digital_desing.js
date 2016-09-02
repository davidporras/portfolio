'use strict';

angular.module('myApp.digital_desing', [
	'ngRoute',
	'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/diseñodigital', {
    templateUrl: 'digital_desing/digital_desing.html',
    controller: 'digital_desingCtrl'
  });
}])

.controller('digital_desingCtrl', function($scope) {

	
	
});