var app = angular.module('cmo', ['ngRoute', 'cmoControllers']);

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