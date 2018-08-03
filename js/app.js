
/////////MAIN VARIABLES////////
///////////////////////////////
var redditJson = 'https://www.reddit.com/r/gifs.json';

///////THIS IS THE MAIN WRAPPER FOR VID DIVS///////
var theBody = document.getElementById('contentBox');


/////////GET REQUEST///////////
///////////////////////////////
function reqHelper(api, listener){
  var req = new XMLHttpRequest();
  req.addEventListener('load', listener);
  req.open('GET', api);
  req.send();
}


//////////SELF INVOKING FUNCTION//////////
//////////////////////////////////////////
(function() {
function apiApp(){
  var children = JSON.parse(this.responseText);
  console.log(children);
  
for(let i = 0; i < children.data.children.length; i++){
  let newAnchor = document.createElement('a');

  // console.log("http://reddit.com${children.data.children[i].data.permalink");
  let newPost = document.createElement('div');
  newAnchor.className = "postBox";
  ///////NEED TO DO OBJECT WITH HREF METHOD
  ///////IN ORDER TO HYPERLINK VID DIVS

  let newGif = document.createElement('div');
  newGif.className = "item-image";
  
  let newTitle = document.createElement('div');
    newTitle.className = "post-title";
    newTitle.innerHTML = children.data.children[i].data.title;

  if(children.data.children[i].data.preview.images[0].variants.gif){
    console.log("Images: ",children.data.children[i].data.preview.images[0].variants.gif);
    // console.log("Video URLs :",children.data.children[i].data.preview.images[0].variants.gif.source.url);
    newGif.style = `background-image: url('${children.data.children[i].data.preview.images[0].variants.gif.source.url};')`; 
  } 
  
  ///////NEED TO DO ELSE STATEMENT FOR ????
  ///////??????

  newPost.appendChild(newGif);
  newPost.appendChild(newTitle);
  newAnchor.appendChild(newPost);
  theBody.appendChild(newAnchor);
}
}

reqHelper(redditJson, apiApp);
})(); 