var cmoControllers = angular.module('cmoControllers', ['Data']);

cmoControllers.controller('HomeController', ['$scope', function($scope) {
    $scope.role = 'admin';
    $scope.updateRole = function(role) {
        $scope.role = role;
    }
}]);

cmoControllers.controller('ProductController', ['$scope', 'Products', 'SimilarProducts', 'ManageResponses', 'CompareItems', 'ShoppingCart','ConfigureProduct','NeedsApproval', function ($scope, Products, SimilarProducts, ManageResponses, CompareItems, ShoppingCart, ConfigureProduct, NeedsApproval) {
    $scope.selectedSection = 'store';
    $scope.products = Products.getProducts();
    $scope.similarProducts = SimilarProducts;
    $scope.cartResponse = ManageResponses.getResponse('addToCart');
    $scope.compare = CompareItems.getCompareItems();
    $scope.cart = ShoppingCart.getCart();
    $scope.cartTotalItems = ShoppingCart;
    $scope.selectedView = 'list';
    $scope.approvalItems = NeedsApproval;
    $scope.configureProduct = ConfigureProduct.getConfigureProduct();
    $scope.setCompare = function (item, checked) {
        if (checked == true) {
            $scope.compare.push(item);
        } else {
            $scope.removeCompare(item)
            //console.log('remove item')
        }
        CompareItems.setCompareItems($scope.compare);
    }

    $scope.updateNav = function(page) {
        $scope.selectedSection = page;
    }
    $scope.deleteFromCart = function(item) {
        ShoppingCart.deleteFromCart(item);
    }

    $scope.switchView = function (view) {
        $scope.selectedView = view;
        //console.log($scope.cartTotalItems);
        //console.log(view);
    }

    $scope.removeCompare = function (item) {
        for (i = 0; i < $scope.compare.length; i++) {
            if (item.id == $scope.compare[i].id) {
                $scope.compare.splice(i, 1);
            }
        }
    }

    $scope.configure = function(product) {
        $scope.topOfPage();
        ConfigureProduct.setCompareProduct(product);
    }

    $scope.topOfPage = function() {
        window.scroll(0, 0);
    }

    $scope.submit = function(items) {
        ShoppingCart.setCart();
        NeedsApproval.setItems(items);
        $scope.cart = ShoppingCart.getCart();

        //console.log('products', items);
    }

    $scope.addToCart = function (product) {
        //add to cart
        //on success set response;
        //console.log('product ', product);
        ShoppingCart.setCart(product);
        //console.log(ShoppingCart.getCartItemTotal());
        $scope.cartTotalItems = 52;
        ManageResponses.setResponse('cart', Math.round(Math.random()));
        $scope.cartResponse = ManageResponses.getResponse();
        $scope.topOfPage();

    }
}]);

cmoControllers.controller('ManageController', ['$scope', 'ManageViews', 'Applications', 'Resources', function ($scope, ManageViews, Applications, Resources) {
    $scope.menuManage = true;
    $scope.tabToShow = ManageViews.getTab();
    $scope.applications = Applications;
    $scope.resources = Resources;
    $scope.showDetails = function (tab) {
        ManageViews.setTab(tab)
        $scope.tabToShow = ManageViews.getTab();
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

cmoControllers.controller('CatalogController', ['$scope', 'Products', 'ProvidersList', 'ManageResponses', 'EditProduct', function ($scope, Products, ProvidersList, ManageResponses, EditProduct) {
    $scope.items = Products.getProducts();
    $scope.menuCatalog = true;
    $scope.providers = ProvidersList;
    $scope.formData = {};
    $scope.addProductResponse = ManageResponses.getResponse('addProduct');
    $scope.item = EditProduct.getItem();

    $scope.addService = function() {
        console.log($scope.formData);
        for (i=0; i < $scope.providers.length; i++) {
            if ($scope.providers[i].name == $scope.formData.provider) {
                $scope.formData.thumbnail = $scope.providers[i].thumbnail;
            }
        }
        Products.setProducts($scope.formData);
        ManageResponses.setResponse('addProduct', Math.round(Math.random()));
        window.scroll(0, 0);
    }

    $scope.rowClick = function () {
        console.log('enter the row')
    }

    $scope.edit = function(item) {
        EditProduct.setItem(item);
        //$scope.item = EditProduct.getItem();
        console.log('item to be edited ', $scope.item)
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
    var addProductResponse;
    console.log(addToCartResponse);
    return {
        getResponse: function (action) {
            switch (action) {
                case 'addToCart':
                return addToCartResponse
                break;

                case 'addProduct':
                return addProductResponse
                break;
            }            
        },
        setResponse: function (action, response) {
            switch (action) {
                case 'cart':
                addToCartResponse = response;
                break;

                case 'addProduct':
                addProductResponse = response;
                break;

            }
            
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

cmoControllers.factory('ConfigureProduct', function() {
    var product = {};
    return {
        getConfigureProduct: function() {
            return product
        },
        setCompareProduct: function(selectedProduct) {
            product = selectedProduct;
            console.log('selected product ', product)

        }
    }
})



