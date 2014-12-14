var app = angular.module('cmo', []);

app.factory('Products', function() {
    var products = [
    {
        name: 'Service Name 1',
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        price: 50.00,
        thumbnail: '',
        points: 1000
    },
    {
        name: 'Service Name 2',
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        price: 50.00,
        thumbnail: '',
        points: 1000
    },
    {
        name: 'Service Name 3',
        description: 'Lorem ipsum dolor sit amet, sea id molestie eleifend moderatius, ubique mandamus nec ex. Pro error mentitum ad, pri sonet facilisis voluptatum in, pri voluptua partiendo intellegebat eu.',
        price: 50.00,
        thumbnail: '',
        points: 1000
    }]
    return products
});

app.controller('ProductController', ['$scope', 'Products', function($scope, Products) {
    this.products = Products;
    this.addToCart = false;
}]);