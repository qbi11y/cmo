var app = angular.module('CMO', ['ngRoute', 'cmoControllers', 'Data']);

cmoControllers.directive('checkbox', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            console.log(element.parent().parent().parent().parent(), scope.compare);
        }
    }
})

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
    }).when('/compare', {
        templateUrl: 'compare.html',
        controller: 'ProductController'
    });
}]);