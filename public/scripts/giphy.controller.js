angular.module('giphyApp')
       .controller('GiphyController', GiphyController);

function GiphyController(gif) {
  var giphy = this;

  giphy.results = [];
  giphy.image = '';

  //gets a random image
  giphy.getRandomImage = function () {
    giphy.image = '';
    giphy.sectionOneStatus = 'show';
    giphy.sectionTwoStatus = 'hide';

    gif.randomImageRequest().then(function (url) {
      giphy.image = url;
    });
  };

  giphy.getSearchImage = function () {
    var searchString = '';

    //clears previous results
    giphy.results = [];
    giphy.image = '';

    //sets search value and clears form data
    var search = giphy.search;
    giphy.search = '';

    giphy.sectionOneStatus = 'hide';
    giphy.sectionTwoStatus = 'show';

    //determines if search has spaces, one word, or is blank
    if (search) {
      if (/\s/.test(search)) {
        searchString = search.split(' ').join('+');
      } else {
        searchString = search;
      }

      gif.searchQuery(searchString).then(function (results) {
        giphy.results = results;
      });

    } else {
      alert('Please enter any search term... not a blank one. :-)');
    }
  };
}
