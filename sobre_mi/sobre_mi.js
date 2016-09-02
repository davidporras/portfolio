'use strict';

angular.module('myApp.sobre_mi', [
	'ngRoute',
	'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv', {
    templateUrl: 'sobre_mi/sobre_mi.html',
    controller: 'sobre_miCtrl'
  });
}])

.controller('sobre_miCtrl', function($scope) {
$(function() {
  $('progress').each(function() {
    var max = $(this).val();
    $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
			});
});
	
	
});