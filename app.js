var posts = $.ajax({
  method: 'GET',
  url: 'https://www.reddit.com/r/games.json',
  dataType: 'json'
})
.done(function(data) {
  //handle successful response
  newPosts(data);

  // processResponse(data);
})
.fail(function() {
  //Handle errors
  handleError();
})
.always(function() {
  //Always update the UI with status
});



    // var redditData = posts.responseJSON;


  function newPosts(response){
  var redditContainer = document.getElementById('reddit');
  var mainContainer = document.createElement('div');
  mainContainer.className = "subreddit";
  redditContainer.appendChild(mainContainer);

  var results = response.data.children;

    for (var i = 0; i < results.length; i++){
    var author = results[i].data.author;
    var title = results[i].data.title;
    var forumText = results[i].data.selftext;

    var headerDiv = document.createElement('div');
    headerDiv.className = "title";
    headerDiv.innerHTML = title;
    mainContainer.appendChild(headerDiv);

    var bodyTextDiv = document.createElement('div');
    bodyTextDiv.className = "forumText";
    bodyTextDiv.innerHTML = forumText;
    mainContainer.appendChild(bodyTextDiv);

    var authorDiv = document.createElement('div');
    authorDiv.className = "author";
    authorDiv.innerHTML = "author";
    mainContainer.appendChild(authorDiv);

  }
  return mainContainer;
}