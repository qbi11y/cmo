var app = angular.module('Data', []);

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
            cart.push(product);
        }
    }
})

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






