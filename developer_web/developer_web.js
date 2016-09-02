'use strict';

angular.module('myApp.developer_web', [
	'ngRoute',
	'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/desarrolloweb', {
    templateUrl: 'developer_web/developer_web.html',
    controller: 'developer_webCtrl'
  });
}])

.controller('developer_webCtrl', function($scope) {

	
	
});