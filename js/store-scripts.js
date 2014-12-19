var app = angular.module('CMO', ['ngRoute', 'cmoControllers', 'Data']);

app.config(['$routeProvider', 
    function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'main.html',
        controller: 'ProductController'
    }).when('/details', {
        templateUrl: 'details.html',
        controller: 'ProductController'
    }).when('/configure', {
        templateUrl: 'configure.html',
        controller: 'ProductController'
    }).when('/summary', {
        templateUrl: 'summary.html',
        controller: 'ProductController'
    });
}]);