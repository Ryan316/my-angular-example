
searchApi.service('modelService', function () {
    
    var _itunes = []; 

    this.getSearchResults = function (keyword, $scope, $http, $templateCache, callback) {
    	// submits input text value to apple and gets the results
        ajax.searchKeyword(keyword, $scope, $http, $templateCache, function (response, status) {
            $scope.status = status;
            $scope.response = response.results;
            _itunes = $scope.response;
            callback(_itunes);
        });
    };

    this.showMoreResults = function ($scope) {
    	// renders 28 more results then hides 'view more button' if limit is reached
    	if ($scope.lists.length > 28) {
            $scope.limit += 28;
            if ($scope.limit > $scope.lists.length) {
                $('#more').hide();
            }
        }
    }

});


