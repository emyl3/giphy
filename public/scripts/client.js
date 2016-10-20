var app = angular.module('giphyApp', []);

app.controller('GiphyController', GiphyController);

var API = 'http://api.giphy.com/v1/gifs';
var API_KEY =  'api_key=dc6zaTOxFJmzC';

function GiphyController($http) {
  var giphy = this;
  giphy.searchString = '';
  giphy.results = [];
  giphy.images = '';

  giphy.getRandomImage = function () {
    giphy.images = '';
    $http.get(API + '/random?' + API_KEY + '&tag=')
      .then(function (response) {
        giphy.images = response.data.data.image_url;
      });
  };

  giphy.getSearchImage = function () {
    giphy.results = [];
    giphy.searchString = '';

    if (/\s/.test(giphy.search)) {
      giphy.searchString = (giphy.search).split(' ').join('+');
    } else {
      giphy.searchString = giphy.search;
    }

    console.log(giphy.searchString);

    $http.get(API + '/search?q=' + giphy.searchString + '&' + API_KEY)
      .then(function (response) {
        var arrayOfSearch = response.data.data;
        arrayOfSearch.forEach(function (element) {
          var search = element.images.downsized.url;
          giphy.results.push(search);
        });
      });
  };
}
