var httpRequest;
var array = [];

if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.open('GET', 'http://www.reddit.com/r/volcano.json', true);

httpRequest.onreadystatechange = function () {

    if (httpRequest.readyState === 4) {

      if (httpRequest.status >= 200 && httpRequest.status < 300) {

        /*document.getElementById('reddit').innerHTML = httpRequest.responseText;*/

        var parsing = JSON.parse(this.responseText);
        fetchData(array);

      } else {

        throw new Error('There was a problem with the request.');

      }

    }
};

httpRequest.send(null);

function fetchData (array) {

  var output = '';
  var i;

  for (i = 0; i < array.length; i++) {

    out += '<p href="' + array[i].url + '">' + array[i].display + '</p><br>';

  }

  document.getElementById("reddit1").innerHTML = output;

}

