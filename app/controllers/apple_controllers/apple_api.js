
searchApi.controller('searchController', function ($scope, $http, $templateCache, modelService) {

    $scope.textValue;
    $scope.lists = [];
    $scope.limit = 28;

    $scope.fetch = function () {
        $scope.limit = 28;
        // calls method from model.js
        modelService.getSearchResults($scope.textValue, $scope, $http, $templateCache, function (itunes) {
            $scope.lists = itunes;
            // calls method from effects.js
            effects.checkViewMoreButton(itunes.length, $scope.limit, $("#more"));
        });
    };

    $scope.viewMore = function () {
        // calls method from model.js
        modelService.showMoreResults($scope);
    }

});

