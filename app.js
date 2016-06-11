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
    var forumDate = redditData[i].data.created_utc;



function newPosts(posts){
  for (var i = 0; i < posts.length; i++){

    var redditContainer = document.getElementById('reddit');
    var mainContainer = document.createElement('div');
    mainContainer.className = "subreddit";
    redditContainer.appendChild(mainContainer);

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

    var dateDiv = document.createElement('div');
    dateDiv.className = "date";
    dateDiv.innerHTML = forumDate;
    mainContainer.appendChild(dateDiv);
  }
}
