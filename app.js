$.ajax({
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

// create reddit header
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

// function to iterate through reddit data and post to browser
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

      var footerDiv = postData('div', 'footer', null);
      postDiv.appendChild(footerDiv);

      var dateDiv = postData('div', 'date', redditDate(results[i].data.created_utc) + ' ' + postTime(results[i].data.created_utc));
      footerDiv.appendChild(dateDiv);

      var authorDiv = postData('div', 'author', null);
      var authorLink = createLink('a', "https://www.reddit.com/user/" + author, "by: " + author);
      authorDiv.appendChild(authorLink);
      footerDiv.appendChild(authorDiv);

      var commentDiv = postData('div', 'numComments', null);
      var commentLink = createLink('a', "https://www.reddit.com" + results[i].data.permalink, numComments + " comments");
      commentDiv.appendChild(commentLink);
      footerDiv.appendChild(commentDiv);
    }
    return redditContainer;
  }

// function to add a date with a format of day, month, day, year
  function redditDate(theDate){
    for (var i = 0; i < theDate.length; i++){
      var utcDate = new Date(theDate * 1000);
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return days[utcDate.getUTCDay()] + ', ' + month[utcDate.getUTCMonth()] + ' ' + utcDate.getUTCDate() + ', ' + utcDate.getUTCFullYear();
    }
  }

// function for a time stamp in the AM and PM format
  function postTime(time){
    for (var i = 0; 1 < time.length; i++){
      var utcTime = new Date(time * 1000);
      var hours = utcTime.getHours();
      var minutes = utcTime.getMinutes();
      var amOrPm = hours;
        if (amOrPm >= 12){ // in the 24 hour format > 12 is pm
          amOrPm = 'pm';
        }else{
          amOrPm = 'am';
        }
      hours = hours % 12;
        if (hours){
          hours = hours;
        }else{
          hours = 12;
        }
      // minutes less than 10 are returning 1:1 instead of 1:01
      minutes = ('0' + minutes).slice(-2);
      return hours + ':' + minutes + ' ' + amOrPm;
    }
  }

// function to create elements, class names, and the texts
  function postData(element, className, text){
    var el = document.createElement(element);
    el.className = className;
    el.innerHTML = text;
    return el;
  }

// function to create 'a' elements with href attributes and texts (links).
  function createLink(element, url, text){
    var el = document.createElement(element);
    el.setAttribute('href', url);
    el.innerHTML = text;
    return el;
  }
