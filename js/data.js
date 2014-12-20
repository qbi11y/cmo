var app = angular.module('Data', []);

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
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        shortDescription: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex.',
        price: 150.00,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466761/providers/aws.jpg',
        points: 1500,
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
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        shortDescription: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex.',
        price: 500.00,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/azure.png',
        points: 1250
    },
    {
        id: 3,
        name: 'OpenStack',
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        shortDescription: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex.',
        price: 750.00,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/openstack.png',
        points: 1000
    },
    {
        id: 4,
        name: 'HP',
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        shortDescription: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex.',
        price: 0.00,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/hpcloud.png',
        points: 1100
    },
    {
        id: 5,
        name: 'Google',
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        shortDescription: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex.',
        price: 325.00,
        thumbnail: 'http://res.cloudinary.com/gravitant/image/upload/v1413466762/providers/google.png',
        points: 1000
    }]
    return products
});