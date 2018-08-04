
//json data
var jsonReddit = 'https://www.reddit.com/r/gifs.json';

//wrapper for boxes
var theBody = document.getElementById('contentBox');


//GET Request
function reqHelper(api, listener){
  var req = new XMLHttpRequest();
  req.addEventListener('load', listener);
  req.open('GET', api);
  req.send();
}

//self invoking anonymous function
(function() {
function apiApp(){
  var children = JSON.parse(this.responseText);
  // console.log(children);
  
for(let i = 0; i < children.data.children.length; i++){
  let newAnchor = document.createElement('a');

  // console.log("http://reddit.com${children.data.children[i].data.permalink");
  let newPost = document.createElement('div');
  newAnchor.className = "postBox";

  //images
  let newGif = document.createElement('div');
  newGif.className = "item-image";
  
  //titles
  let newTitle = document.createElement('div');
    newTitle.className = "post-title";
    newTitle.innerHTML = children.data.children[i].data.title;

  //Get the reddit JSON data for the post the gif is from, and find the variants property
  if(children.data.children[i].data.preview.images[0].variants.gif){
    //display videos
    //access it using a combination of json data:
    newGif.style = `background-image: url('${children.data.children[i].data.preview.images[0].variants.gif.source.url};')`; 
    console.log("Spit out URLs :",children.data.children[i].data.preview.images[0].variants.gif.source.url);

  } 
  else{
    //display images
    //access it using a combination of json data:
    newGif.style = `background-image: url('${children.data.children[i].data.preview.images[0].source.url};')`;
  }


  newPost.appendChild(newGif);
  newPost.appendChild(newTitle);
  newAnchor.appendChild(newPost);
  theBody.appendChild(newAnchor);
}
}

reqHelper(jsonReddit, apiApp);
})(); 