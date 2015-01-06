var app = angular.module('CMO', ['ngRoute', 'cmoControllers', 'Data']);

app.config(['$routeProvider', 
    function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'main.html',
        controller: 'CatalogController'
    }).when('/details', {
        templateUrl: 'details.html',
        controller: 'CatalogController'
    }).when('/edit-product', {
        templateUrl: 'edit-product.html',
        controller: 'CatalogController'
    }).when('/add-product', {
        templateUrl: 'add-product.html',
        controller: 'CatalogController'
    })
}]);