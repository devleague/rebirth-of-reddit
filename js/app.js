var postContainer = $("posts");
var dataSet = $.ajax({
  method: 'GET',
  url: 'https://www.reddit.com/r/LetsNotMeet.json',
  dataType: 'json'
})
.done(function(data) {

  var allData = data.data.children;

  // start post element
  // build out post element
  for (var i=0; i<allData.length;i++){
    var postTitle = document.createElement('div');
    postTitle.innerHTML = allData[i].data.title;
    console.log(postTitle);
    // append to post container
    $("h1").append(postTitle.innerHTML);
  }

})
.fail(function() {
  console.log( "error" );
})
.always(function() {
  console.log( "finished" );
});
