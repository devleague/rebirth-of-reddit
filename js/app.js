var postContainer = $("posts");
var dataSet = $.ajax({
  method: 'GET',
  url: 'https://www.reddit.com/r/photoshopbattles.json',
  dataType: 'json'
})
.done(function(data) {
  var previewofImages = data.data.children[0].data.preview.images;
  //console.log(dataSet2.data.children.kind);
  console.log(previewofImages);
  //handle successful response
  //processResponse(data);

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



// $.getJSON('data.json', function(data) { // Get data from JSON file
// for (var i in data.images) {
//     var output+=data.images[i].bannerImg1; // Place image in variable output
// }
// document.getElementById("banner-img").innerHTML=output;}); // Display image in the img tag placeholder

// data.data.children[0].data.preview.images.forEach( function(obj) {
//   var img = new Image();
//   img.src = obj.bannerImg1;
//   img.setAttribute("class", "banner-img");
//   img.setAttribute("alt", "effy");
//   document.getElementById("img-container").appendChild(img);
// });
