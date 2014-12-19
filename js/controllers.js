var cmoControllers = angular.module('cmoControllers', []);

cmoControllers.controller('ProductController', ['$scope', 'Products', 'SimilarProducts', function($scope, Products, SimilarProducts) {
    $scope.menuStore = true;
    this.products = Products;
    this.similarProducts = SimilarProducts;
    this.addToCart = false;
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
})