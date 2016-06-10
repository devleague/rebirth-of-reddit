var posts = $.ajax({
  method: 'GET',
  url: 'https://www.reddit.com/r/games.json',
  dataType: 'json'
})
.done(function(data) {
  //handle successful response
  //JSON.parse(data);
  var jData = data;

  // processResponse(data);
})
.fail(function() {
  //Handle errors
  // handleError();
})
.always(function() {
  //Always update the UI with status
});

var redditData = posts.responseJSON.data.children;
var author = redditData[i].data.author;
var title = redditData[i].data.title;
var forumText = redditData[i].data.selftext;

var mainContainer = document.createElement('div');
var headerDiv = document.createElement('div');


