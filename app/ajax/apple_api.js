
var ajax = function () {

    var searchKeyword = function (queryString, $scope, $http, $templateCache, callback) {

        $scope.method = 'JSONP';
        $scope.url = 'http://itunes.apple.com/search?term=' + queryString + '&callback=JSON_CALLBACK&limit=200';
        $scope.code = null;
        $scope.response = null;

        $http({
            method: $scope.method,
            url: $scope.url,
            cache: $templateCache
        }).
        success(function (response, status) {
            if (typeof(callback) === typeof(Function)) {
                console.log(response);
                callback(response, status);
            }
        }).
        error(function (response, status) {
            $scope.response = response.results || "Request failed";
            $scope.status = status;
        });

    }
   
    return {
        searchKeyword: searchKeyword
    }
    
return ajax;

}();


