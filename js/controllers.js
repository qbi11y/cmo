var cmoControllers = angular.module('cmoControllers', []);

cmoControllers.controller('ProductController', ['$scope', 'Products', 'SimilarProducts', function($scope, Products, SimilarProducts) {
    this.products = Products;
    this.similarProducts = SimilarProducts;
    this.addToCart = false;
}]);

cmoControllers.factory('ManageViews', function(){
    var showResources = true;
    var showApplications = false;

    var showTab = function() {
        showResources = 'i am progressing';
        return showResources
    }
    return 'this is my service'
})

cmoControllers.controller('ManageController', ['$scope', 'ManageViews', function($scope, ManageViews){
    $scope.test = 'coming from message controller';

    $scope.showDetails = function(tab) {
        if ( tab == 'resources' ) {
            $scope.showResources = true;
            $scope.showApplications = false;
            console.log('showApplications - ' + $scope.showApplications, 'showResources - ' + $scope.showResources );
        } else {
            $scope.showResources = false;
            $scope.showApplications = true;
            console.log('showApplications - ' + $scope.showApplications, 'showResources - ' + $scope.showResources );
        }
    }

    console.log(ManageViews.showTab());
}])