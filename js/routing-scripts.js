var app = angular.module('CMO', ['ngRoute', 'cmoControllers', 'Data']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })

    //route for the store
    .when('/store', {
        templateUrl: 'templates/store/main.html',
        controller: 'ProductController'
    })

    //route to the store compare
    .when('/store/compare', {
        templateUrl: 'templates/store/compare.html',
        controller: 'ProductController'
    })

    //route to the store configure
    .when('/store/configure', {
        templateUrl: 'templates/store/configure.html',
        controller: 'ProductController'
    })

    .when('/store/cart', {
        templateUrl: 'templates/store/cart.html',
        controller: 'ProductController'
    })

    //route the product configure summary
    .when('/store/configure/summary', {
        templateUrl: 'templates/store/summary.html',
        controller: 'ProductController'
    })

    //route for product details in store
    .when('/store/details', {
        templateUrl: 'templates/store/details.html',
        controller: 'ProductController'
    })

    //route for the manage
    .when('/manage', {
        templateUrl: 'templates/manage/main.html',
        controller: 'ManageController'
    })

    //route to the manage resources details
    .when('/manage/resources/details',  {
        templateUrl: 'templates/manage/details.html',
        controller: 'ManageController'
    })

    //route to the manage application details
    .when('/manage/applications/details',  {
        templateUrl: 'templates/manage/details.html',
        controller: 'ManageController'
    })

    //routes to the catalog
    .when('/catalog', {
        templateUrl: 'templates/catalog/main.html',
        controller: 'CatalogController'
    })

    //routes to the catalog details
    .when('/catalog/details', {
        templateUrl: 'templates/catalog/details.html',
        controller: 'CatalogController'
    })

    //routes to the catalog edit
    .when('/catalog/edit-product', {
        templateUrl: 'templates/catalog/edit-product.html',
        controller: 'CatalogController'
    })

    //routes to the catalog add product
    .when('/catalog/add-product', {
        templateUrl: 'templates/catalog/add-product.html',
        controller: 'CatalogController'
    })


    //default route takes you to the store
    .otherwise({
        redirectTo: '/'
    });
}]);




/*
app.config(['$routeProvider', 
    function($routeProvider) {
    $routeProvider.when('/cmo/store', {
        templateUrl: 'templates/store/main.html',
        controller: 'ProductController'
    }).when('/details', {
        templateUrl: 'templates/store/details.html',
        controller: 'ProductController'
    }).when('/configure', {
        templateUrl: 'templates/store/configure.html',
        controller: 'ProductController'
    }).when('/summary', {
        templateUrl: 'templates/store/summary.html',
        controller: 'ProductController'
    }).when('/compare', {
        templateUrl: 'templates/store/compare.html',
        controller: 'ProductController'
    }).when('/cmo/manage', {
        templateUrl: 'templates/manage/main.html',
        controller: 'ManageController'
    }).when('/cmo/manage/details', {
        templateUrl: 'templates/mange/details.html',
        controller: 'ManageController'
    }).when('/cmo/catalog', {
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
*/