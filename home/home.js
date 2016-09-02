'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inicio', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
  $.material.init();

}])

.controller('homeCtrl', [function() {
 	$("#modalDesingDigial").animatedModal({
 				modalTarget:'animatedModal',
                animatedIn:'zoomIn',
                animatedOut:'zoomOut',
                color:'rgba(255, 255, 255, 0.77)',
 	});
 	$("#modalDesarrolloWeb").animatedModal({
 				modalTarget:'animatedModalDesarrolloWeb',
                animatedIn:'zoomIn',
                animatedOut:'zoomOut',
                color:'rgba(255, 255, 255, 0.77)',
 	});
}]);