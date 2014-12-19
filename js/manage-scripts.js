var app = angular.module('CMO', ['ngRoute', 'cmoControllers']);

app.config(['$routeProvider', 
    function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'main.html',
        controller: 'ManageController'
    }).when('/details', {
        templateUrl: 'details.html',
        controller: 'ManageController'
    })
}]);