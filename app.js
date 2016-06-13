$.ajax({
  method: 'GET',
  url: 'https://www.reddit.com/r/games.json',
  dataType: 'json'
})
.done(function(data1) {
  //handle successful response
  newPosts(data1);

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
  var redditHeader = document.createElement('div');
  redditHeader.id = "main-header";
  redditContainer.appendChild(redditHeader);
  var redditIcon = document.createElement('img');
  redditIcon.src = "assets/reddit.png";
  redditIcon.id = "reddit-img";
  redditHeader.appendChild(redditIcon);
  var spanElement = document.createElement('span');
  spanElement.className = "span-header";
  var redHeaderTxt = document.createTextNode("/r/Games");
  spanElement.appendChild(redHeaderTxt);
  redditHeader.appendChild(spanElement);

  function newPosts(response){
    var results = response.data.children;
    for (var i = 0; i < results.length; i++){
      var author = results[i].data.author;
      var title = results[i].data.title;
      //if forumText is truthy will return the forumText, if falsey returns title
      var forumText = results[i].data.selftext ? results[i].data.selftext : '<a href="' + titleLink + '">' +  titleLink +  '</a>';
      var numComments = results[i].data.num_comments;
      var postDiv = postData('div', 'posts', null);
      redditContainer.appendChild(postDiv);

      var headerDiv = postData('div', 'title', null);
      var titleLink = createLink('a', results[i].data.url, title);
      headerDiv.appendChild(titleLink);
      postDiv.appendChild(headerDiv);

      var bodyTextDiv = postData('div', 'forumText', forumText);
      postDiv.appendChild(bodyTextDiv);

      var dateDiv = postData('div', 'date', redditDate(results) + ' ' + postTime(results));
      postDiv.appendChild(dateDiv);

      var authorDiv = postData('div', 'author', null);
      var authorLink = createLink('a', "https://www.reddit.com/user/" + author, "by: " + author);
      authorDiv.appendChild(authorLink);
      postDiv.appendChild(authorDiv);

      var commentDiv = postData('div', 'numComments', null);
      var commentLink = createLink('a', "https://www.reddit.com" + results[i].data.permalink, numComments + " comments");
      commentDiv.appendChild(commentLink);
      postDiv.appendChild(commentDiv);
  }
  return redditContainer;
}

  var redditDate = function(theDate){
    for (var i = 0; i < theDate.length; i++){
    var date = theDate[i].data.created_utc;
    var utcDate = new Date(date * 1000);
    var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    var month = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return days[utcDate.getUTCDay()] + ', ' + month[utcDate.getUTCMonth()] + ' ' + utcDate.getUTCDate(date) + ', ' + utcDate.getUTCFullYear(date);
    }
  };

  function postTime(time){
    for (var i = 0; 1 < time.length; i++){
    var utcTime = new Date(time[i].data.created_utc * 1000);
    var hours = utcTime.getHours();
    var minutes = utcTime.getMinutes();
    var amOrPm = hours;
      if (amOrPm >= 12){
        amOrPm = 'pm';
      }else{
        amOrPm = 'am';
      }
    hours = hours % 12;
    hours = hours % 12;
      if (hours){
        hours = hours;
      }else{
        hours = 12;
      }
    minutes = minutes < 10 ? '0'+minutes : minutes;
    return hours + ':' + minutes + ' ' + amOrPm;
    }
  }

  function postData(element, className, text){
    var el = document.createElement(element);
    el.className = className;
    el.innerHTML = text;
    return el;
  }

  function createLink(element, url, text){
    var el = document.createElement(element);
    el.setAttribute('href', url);
    el.innerHTML = text;
    return el;
  }
