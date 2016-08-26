var postContainer = $("posts");
var dataSet = $.ajax({
  method: 'GET',
  url: 'https://www.reddit.com/r/NoSleep.json',
  dataType: 'json'
})
.done(function(data) {

  var allData = data.data.children;

  var posts = document.createElement('div');

  //var linkElement = document.createElement('a');



  // start post element
  // build out post element
  for (var i=0; i<allData.length;i++){
    var postTitle = $('<h1 />');
    //var postTitle = document.createElement('h1');
    var linkElement = $('<a/>');
    linkElement.attr('href', allData[i].data.url);
    linkElement.text(allData[i].data.title);
    //postTitle.innerHTML = allData[i].data.title;

    //postTitle.url = allData[i].data.url;
    // append to post container
    $(postTitle).append(linkElement);
    $("div").append(postTitle);
    $(posts).append("div");

    console.log(linkElement);
    console.log(postTitle.innerHTML);
    //$("div").append()
  }

})
.fail(function() {
  console.log( "error" );
})
.always(function() {
  console.log( "finished" );
});
