angular.module('giphyApp')
       .service('gif', GifAPIService);

function GifAPIService($http) {
  const API = 'http://api.giphy.com/v1/gifs';
  const API_KEY = 'api_key=dc6zaTOxFJmzC';

  this.randomImageRequest = function () {
    return $http.get(API + '/random?' + API_KEY + '&tag=')
      .then(function (response) {
        return response.data.data.image_url;
      });
  };

  this.searchQuery = function (searchString) {
    return $http.get(API + '/search?q=' + searchString + '&' + API_KEY)
      .then(function (response) {
        var arrayOfResponse = response.data.data;
        var result = [];

        arrayOfResponse.forEach(function (element) {
          var value = element.images.downsized.url;
          result.push(value);
        });

        return result;
      });
  };
}
