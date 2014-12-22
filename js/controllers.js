var cmoControllers = angular.module('cmoControllers', []);
cmoControllers.controller('ProductController', ['$scope', 'Products', 'SimilarProducts', 'ManageResponses', 'CompareItems', function ($scope, Products, SimilarProducts, ManageResponses, CompareItems) {
    $scope.menuStore = true;
    this.products = Products;
    this.similarProducts = SimilarProducts;
    $scope.cartResponse = ManageResponses.getResponse();
    $scope.compare = CompareItems.getCompareItems();
    $scope.setCompare = function (item, checked) {
        if (checked == true) {
            $scope.compare.push(item);
        } else {
            $scope.removeCompare(item)
            //console.log('remove item')
        }
        CompareItems.setCompareItems($scope.compare);
    }

    $scope.removeCompare = function (item) {
        console.log(item.id);
        for (i = 0; i < $scope.compare.length; i++) {
            if (item.id == $scope.compare[i].id) {
                $scope.compare.splice(i, 1);
            }
        }
    }

    $scope.addToCart = function () {
        //add to cart
        //on success set response;
        ManageResponses.setResponse('cart', Math.round(Math.random()));
        $scope.cartResponse = ManageResponses.getResponse();
        window.scroll(0, 0);
    }
}]);

cmoControllers.controller('ManageController', ['$scope', 'ManageViews', 'Applications', 'Resources', function ($scope, ManageViews, Applications, Resources) {
    $scope.menuManage = true;
    $scope.tabToShow = ManageViews.getTab();
    $scope.applications = Applications;
    $scope.resources = Resources;
    console.log(Resources);
    $scope.showDetails = function (tab) {
        ManageViews.setTab(tab)
        $scope.tabToShow = ManageViews.getTab();
        console.log($scope.tabToShow);
    };

    $scope.options = {
        chart: {
            type: 'pieChart',
            height: 100,
            width: 100,
            x: function (d) { return d.key; },
            y: function (d) { return d.y; },
            showLabels: false,
            transitionDuration: 500,
            labelThreshold: 0.01,
            showLegend: false,
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
            legend: {
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
        }
    };

    $scope.sampledata = [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
    ];

    //checks resource for data, if no data use a sample data set
    $scope.getData = function (resource) {
        if (resource.chartdata) return resource.chartdata;
        return $scope.sampledata;
    };

}]);

cmoControllers.controller('CatalogController', ['$scope', 'Products', function ($scope, Products) {
    $scope.items = Products;
    $scope.menuCatalog = true;

    $scope.rowClick = function () {
        console.log('enter the row')
    }
}]);

cmoControllers.factory('ManageViews', function () {
    var tabToShow = 'resources';
    return {
        getTab: function () {
            return tabToShow
        },
        setTab: function (tab) {
            tabToShow = tab;
        }
    }
});

cmoControllers.factory('ManageResponses', function () {
    var addToCartResponse;
    console.log(addToCartResponse);
    return {
        getResponse: function () {
            return addToCartResponse
        },
        setResponse: function (action, response) {
            addToCartResponse = response;
        }
    }
});

cmoControllers.factory('CompareItems', function () {
    var compareItems = [];
    return {
        getCompareItems: function () {
            return compareItems;
        },
        setCompareItems: function (items) {
            compareItems = items;
        }
    }
});



