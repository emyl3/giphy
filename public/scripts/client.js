var app = angular.module('giphyApp', []);

app.controller('GiphyController', GiphyController);

var API = 'http://api.giphy.com/v1/gifs';
var API_KEY =  'api_key=dc6zaTOxFJmzC';

function GiphyController($http) {
  var giphy = this;

  console.log('GiphyController loaded');

  giphy.images = '';

   giphy.getRandomImage = function() {
    $http.get(API + '/random?' + API_KEY + '&tag=') //key ?api_key=dc6zaTOxFJmzC
      .then(function (response) {
        console.log('response.data', response.data.data);
        giphy.images = response.data.data.image_url;
        console.log(giphy.images);
      });

  };

  }
