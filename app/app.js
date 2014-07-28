
var searchApi = angular.module('searchApi', ['ngRoute']);

	searchApi.config(function ($routeProvider) {
        $routeProvider
            .when('/', 
                {
                    controller: 'searchController',
                    templateUrl: 'app/views/apple_views/apple_v1.html'
                })
            .when('/view2', 
                {
                    controller: 'searchController',
                    templateUrl: 'app/views/apple_views/apple_v2.html'
                })
            .otherwise({ redirectTo: '/' });
    });


