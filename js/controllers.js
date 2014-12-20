var cmoControllers = angular.module('cmoControllers', []);

cmoControllers.controller('ProductController', ['$scope', 'Products', 'SimilarProducts', 'ManageResponses', function($scope, Products, SimilarProducts, ManageResponses) {
    $scope.menuStore = true;
    this.products = Products;
    this.similarProducts = SimilarProducts;
    $scope.cartResponse = ManageResponses.getResponse();
    $scope.compare = 'something';
    $scope.setCompare = function(item) {
        //$scope.compare = $event;
        console.log(item);
    }
    
    $scope.addToCart = function() {
        //add to cart
        //on success set response;
        ManageResponses.setResponse('cart', Math.round(Math.random()));
        $scope.cartResponse = ManageResponses.getResponse();
        window.scroll(0, 0);
    }
}]);

cmoControllers.controller('ManageController', ['$scope', 'ManageViews', function($scope, ManageViews){
    $scope.menuManage = true;
    $scope.tabToShow = ManageViews.getTab();
    $scope.showDetails = function(tab) {
        ManageViews.setTab(tab)
        $scope.tabToShow = ManageViews.getTab();
        console.log($scope.tabToShow);
    }
}]);

cmoControllers.controller('CatalogController', ['$scope', 'Products', function($scope, Products) {
    $scope.items = Products;
    $scope.menuCatalog = true;
}]);

cmoControllers.factory('ManageViews', function(){
    var tabToShow = 'resources';
    return {
        getTab: function() {
            return tabToShow
        },
        setTab: function(tab) {
            tabToShow = tab;
        }
    }
});

cmoControllers.factory('ManageResponses', function() {
    var addToCartResponse;
    console.log(addToCartResponse);
    return {
        getResponse: function() {
            return addToCartResponse
        },
        setResponse: function(action, response) {
            addToCartResponse = response;
        }
    }
})


