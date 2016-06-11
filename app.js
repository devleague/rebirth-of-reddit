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


    var redditContainer = document.getElementById('reddit');
    // var buttonDiv = document.createElement('div');
    // buttonDiv.className = "button";
    // var fetchButton = document.createElement('BUTTON');
    // var buttonText = document.createTextNode("Fetch Post");
    // fetchButton.appendChild(buttonText);
    // buttonDiv.appendChild(fetchButton);
    // redditContainer.appendChild(buttonDiv);


  function newPosts(response){
    var results = response.data.children;
    for (var i = 0; i < results.length; i++){
      var author = results[i].data.author;
      var title = results[i].data.title;
      //if forumText is truthy will return the forumText, if falsey returns title
      var forumText = results[i].data.selftext ? results[i].data.selftext : title;
      var numComments = results[i].data.num_comments;
      var postDiv = postData('div', 'posts', null);
      redditContainer.appendChild(postDiv);

      var headerDiv = postData('a', 'title', title);
      var titleLink = document.getElementsByClassName('title');
        titleLink[i].setAttribute('href', results[i].data.url);
      postDiv.appendChild(headerDiv);

      var bodyTextDiv = postData('div', 'forumText', forumText);
      postDiv.appendChild(bodyTextDiv);

      var dateDiv = postData('div', 'date', redditDate(results));
      postDiv.appendChild(dateDiv);

      var authorDiv = postData('div', 'author', author);
      postDiv.appendChild(authorDiv);

      var numCommentDiv = postData('div', 'numComments', numComments);
      postDiv.appendChild(numCommentDiv);
  }
  return redditContainer;
}

    // fetchButton.addEventListener('click', newPosts);

  var redditDate = function(theDate){
    for (var i = 0; i < theDate.length; i++){
    var date = theDate[i].data.created_utc;
    var utcDate = new Date(date * 1000);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[utcDate.getUTCDay()] + ' ' + month[utcDate.getUTCMonth()] + ' ' + utcDate.getUTCDate(date) + ', ' + utcDate.getUTCFullYear(date);
    }
  };

  function postData(element, className, text){
    var el = document.createElement(element);
    el.className = className;
    el.innerHTML = text;
    return el;
  }
