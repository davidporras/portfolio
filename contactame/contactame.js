'use strict';

angular.module('myApp.contactame', [
    'ngRoute',
    'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contactame', {
        templateUrl: 'contactame/contactame.html',
        controller: 'contactameCtrl'
    });
}])

.controller('contactameCtrl', function($scope,$http) {

	$scope.enviar = function(){
		$http.post('contactame/contactame.php', $scope.form, { 'Content-Type': 'application/x-www-form-urlencoded' }).then(function successCallback(response) {
	        console.log ( response, "Se envio el mensaje");
	        $scope.isOk = true;
	        $scope.form = {};
	    }, function errorCallback(response) {
	       $scope.notOk = true;
	    });
	};
	$scope.form = {};
});
