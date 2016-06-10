$.ajax({
  method: 'GET',
  url: 'https://www.reddit.com/r/javascript.json',
  dataType: 'json'
})
.done(function(data) {
  console.log(data);
  //handle successful response
  //processResponse(data);
})
.fail(function() {
  //Handle errors
  //handleError();
})
.always(function() {
  //Always update the UI with status
});