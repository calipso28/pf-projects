app.factory('photos', ['$http', function($http) {
    return $http.get('https://calipso28.github.io/Data/project2.json')
           .success(function(data) {
             return data;
           })
           .error(function(data) {
             return data;
           });
  }]);
  
