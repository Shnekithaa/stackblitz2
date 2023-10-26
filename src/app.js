class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail){
    this.title = title;
    this.detail = detail;
  }
  addTitle(){
    var title_card = document.createElement('h1');
    title_card.setAttribute("id","blog-title");
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }
  addDescription(){
    var description_card = document.createElement('p');
    description_card.setAttribute('id', 'blog-description');
    document.getElementById('card-text').appendChild(description_card);
    description_card.innerHTML += this.detail;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`

let toggle;
function helperAddPost(){
  if(toggle == 1){
    document.getElementById("popupContact").style.display = "block";
    return toggle = 0;
  }else{
    document.getElementById("popupContact").style.display = "none";
    return toggle = 1;
  }
}
function helperPost(){
  let title = document.getElementById("title");
  let detail = document.getElementById("detail");
  let blogObj = new Blog(title, detail);
  blogObj.addTitle();
  blogObj.addDescription();
}