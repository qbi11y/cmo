var app = angular.module('CMO', ['ngRoute', 'cmoControllers', 'Data']);

app.config(['$routeProvider', 
    function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/store/main.html',
        controller: 'ProductController'
    }).when('/store/details', {
        templateUrl: 'templates/store/details.html',
        controller: 'ProductController'
    }).when('/store/configure', {
        templateUrl: 'templates/store/configure.html',
        controller: 'ProductController'
    }).when('/store/summary', {
        templateUrl: 'templates/store/summary.html',
        controller: 'ProductController'
    }).when('/store/compare', {
        templateUrl: 'templates/store/compare.html',
        controller: 'ProductController'
    }).when('/manage', {
        templateUrl: 'templates/manage/main.html',
        controller: 'ManageController'
    }).when('/manage/details', {
        templateUrl: 'templates/mange/details.html',
        controller: 'ManageController'
    }).when('/catalog', {
        templateUrl: 'templates/catalog/main.html',
        controller: 'CatalogController'
    }).when('/details', {
        templateUrl: 'templates/catalog/details.html',
        controller: 'CatalogController'
    }).when('/edit-product', {
        templateUrl: 'templates/catalog/edit-product.html',
        controller: 'CatalogController'
    }).when('/add-product', {
        templateUrl: 'templates/catalog/add-product.html',
        controller: 'CatalogController'
    }).otherwise({
        redirectTo: '/cmo'
    });
}]);