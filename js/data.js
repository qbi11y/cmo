var app = angular.module('Data', []);

app.factory('ImportedServices', ['GlobalCatalog', function(GlobalCatalog) {
    var services = [];

    return {
        clear: function(populate) {
            if (populate) {
                services = GlobalCatalog.getServices()
            } else {
                services = [];
            }
        },
        getServices: function() {
            //console.log('type of ', (services))
            return services
        },
        addServices: function(selectedService) {
            services.push(selectedService);
        },
        removeService: function(serviceToRemove) {            
            for (var i=0; i < services.length; i++) {
                if (services[i].id == serviceToRemove ) {
                    services.splice(i, 1);
                }
            }
        }
    }
}]);

//service to take care of services to be imported
app.factory('GlobalCatalog', function() {
    //array holding all of the providers
    var services = {
        providers: [
        {
            id: 1,
            name: 'Amazon',
            thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466761/providers/aws.jpg'
        },
        {
            id: 2,
            name: 'Microsoft',
            thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/azure.png'
        },
        {
            id: 3,
            name: 'Google',
            thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/google.png'
        }], 

        services: [
        {
            id: 1,
            name: 'Some Amazon Service Name 1',
            provider: 1
        },
        {
            id: 2,
            name: 'Some MS Service Name 1',
            provider: 2
        },
        {
            id: 3,
            name: 'Some MS Service Name 2',
            provider: 2
        },
        {
            id: 4,
            name: 'Some Amazon Service Name 2',
            provider: 1
        },
        {
            id: 5,
            name: 'Some Google Service Name 1',
            provider: 3
        }]}

    

    return {
        getServices: function() {
            return services.services
        },
        getCatalog: function() {
            return services
        }
    }
})

//service to take care of the products that need to be edited
app.factory('EditProduct', function() {
    var item = {}
    return {
        getItem: function() {
            return item
        },
        setItem: function(selectedItem) {
            item = selectedItem
        }
    }
});

app.factory('ProvidersList', function() {
    var providers = [
    {
        id: 1,
        name: 'Amazon',
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466761/providers/aws.jpg'
    },
    {
        id: 2,
        name: 'Microsoft',
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/azure.png'
    },
    {
        id: 3,
        name: 'Google',
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/google.png'
    }]
    return providers
});

app.factory('ShoppingCart', function() {
    var cart = [];
    return {
        getCart: function() {
            return cart
        },
        getCartItemTotal: function(){
            return cart.length
        },
        setCart: function(product) {
            if (product) {
                cart.push(product);
            } else {
                cart = [];
            }
        },
        deleteFromCart: function(item) {
            console.log(cart.id);
            for (var i=0; i < cart.length; i++){
                if (cart[i].id == item.id) {
                    cart.splice(i, 1);
                    console.log('new cart', cart)
                }
            }
            
        }
    }
});

app.factory('NeedsApproval', function() {
    var approve = [];
    return {
        getItems: function() {
            return approve.length
        },
        setItems: function(item) {
            approve.push(item);
        }
    }
});

//application data
app.factory('Applications', function() {
    var applications = [
    {
        name: 'Application Name',
        data: {

        },
        cost: {
            monthToDate: 100.56,
            yearToDate: 795.56
        }
    }]
    return applications
});


//resource data
app.factory('Resources', function() {
    var resources = [
    {
            name: 'Compute',
            data: {
                processor: '16 GHz',
                core: 'Quad Core'
            }
        },
    {
            name: 'Network',
            data: {
                bandwidth: '1 Gigabit',
            }
    },
    {
            name: 'Storage',
            data: {
                capacity: '5 TB',
                type: 'SSD'
            }
        },
        {
            name: 'Memory',
            data: {
                RAM: '32GB',
                type: 'DRAM'
        }
        },
        {
            name: 'Managed Resources',
            data: {

            
        }
    }]
    return resources
});



//holds the similar products
app.factory('SimilarProducts', function() {
    var similarProducts = [
    {
        provider: 'Google',
        price: 100,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/google.png',
        points: 1500
    },
    {
        provider: 'Azure',
        price: 90,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/azure.png',
        points: 1750
    },
    {
        provider: 'OpenStack',
        price: 110,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/openstack.png',
        points: 500
    }];

    return similarProducts
});


//holds all the products
app.factory('Products', function() {
    var products = [
    {
        id: 1,
        storeEnabled: true,
        solutionEnabled: false,
        name: 'Amazon Web Services',
        type: 'service',
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        shortDescription: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex.',
        price: 150.00,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466761/providers/aws.jpg',
        points: 1500,
        instances: 325,
        categories: [{
            name: 'Category -- 1',
            options: [{
                name: 'Some Name',
                value: 'Some Value'
            },
            {
                name: 'Another Name',
                value: 'Another Value',
            },
            {
                name: 'Last Name',
                value: 'Last Value'
            }]
        },
        {
            name: 'Category -- 2',
            options: [{
                name: 'Some Name',
                value: 'Some Value'
            },
            {
                name: 'Another Name',
                value: 'Another Value',
            },
            {
                name: 'Last Name',
                value: 'Last Value'
            }]
        },
        {
            name: 'Category -- 3',
            options: [{
                name: 'Some Name',
                value: 'Some Value'
            },
            {
                name: 'Another Name',
                value: 'Another Value',
            },
            {
                name: 'Last Name',
                value: 'Last Value'
            }]
        }]
    },
    {
        id: 2,
        storeEnabled: true,
        solutionEnabled: false,
        name: 'Azure',
        type: 'vm',
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        shortDescription: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex.',
        price: 500.00,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/azure.png',
        points: 1250,
        instances: 32
    },
    {
        id: 3,
        storeEnabled: true,
        solutionEnabled: false,
        name: 'OpenStack',
        type: 'service',
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        shortDescription: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex.',
        price: 750.00,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/openstack.png',
        points: 1000,
        instances: 56
    },
    {
        id: 4,
        storeEnabled: true,
        solutionEnabled: false,
        name: 'HP',
        type: 'service',
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        shortDescription: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex.',
        price: 0.00,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/hpcloud.png',
        points: 1100,
        instances: 150
    },
    {
        id: 5,
        storeEnabled: false,
        solutionEnabled: false,
        name: 'Google',
        type: 'service',
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        shortDescription: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex.',
        price: 325.00,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/google.png',
        points: 1000,
        instances: 10
    }]
    return {
        getProducts: function() {
            return products
        },
        setProducts: function(product) {
            products.push(product);
        }
    }
    //return products
});






