var httpRequest;
var reddit = document.getElementById('reddit');

if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
    httpRequest.addEventListener('load', fetchData);
} else if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.open('GET', 'http://www.reddit.com/r/webdev.json', true);

httpRequest.onreadystatechange = function () {

    if (httpRequest.readyState === 4) {

      if (httpRequest.status >= 200 && httpRequest.status < 300) {

      } else {

        throw new Error('There was a problem with the request.');

      }

    }
};

httpRequest.send(null);

function fetchData () {

  reddit.innerHTML = '';

  var jsonData = JSON.parse(httpRequest.responseText);

  for (var i = 0; i < jsonData.data.children.length; i++) {

    var title = document.createElement('div');
    title.innerHTML = "<a href='" + jsonData.data.children[i].data.url + "'>" + jsonData.data.children[i].data.title + "</a>";
    title.className = 'title';
    reddit.appendChild(title);

    var date = document.createElement('div');
    var created = (new Date(jsonData.data.children[i].data.created)).toString();
    date.innerHTML = "Created Date: " + created;
    reddit.appendChild(date);

    var author = document.createElement('span');
    author.className = "author";
    author.innerHTML = " by " + jsonData.data.children[i].data.author;
    date.appendChild(author);

  }

}











