// Create a "close" button and append it to each list item for already existing items
const css = require('./Style.CSS');
let myNodelist = document.getElementsByTagName("li");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
//function newElement() {
  var btnAdd =document.getElementById('btnAddElement');  
  btnAddElement.addEventListener('click',function(ev){
     let parentdiv=document.querySelector('ul').cloneNode(true);
  objStackU.push(parentdiv);
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  } 
  
  //Clear the input field
  document.getElementById("myInput").value = "";
 
var capt = document.getElementById("Caption");
var cap = capt.value;
var Captio = document.createElement("CAPTION");
var captiontxt = document.createTextNode(cap);
Captio.className= "CAPTION";
Captio.appendChild(captiontxt);
li.appendChild(Captio);
document.getElementById("Caption").value = "";
// Create a "close" button and append it to each list item for newly created items
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var author = document.getElementById("author").value;
var Author = document.createElement("AUTHOR");
var authortxt = document.createTextNode(author);
Author.className = "AUTHOR";
Author.appendChild(authortxt);
li.appendChild(Author);
document.getElementById("author").value="";

var d = new Date(); 
var date = document.createElement("DATE");
var datetxt = document.createTextNode(d);
date.className = "Date";
date.appendChild(datetxt);
li.appendChild(date);

}, false);

//adding JSON file
let link = "https://api.myjson.com/bins/1g2t36";

/*var i;*/
var request = function(url, method){
var xhr = new XMLHttpRequest();
return new Promise(function(resolve, reject){
xhr.onreadystatechange = function(){
  if(xhr.readyState !==4) return; 
  if(xhr.status >= 200 && xhr.status <300){
    resolve(xhr);
  }else{
    reject({
      status: xhr.status,
      statusText : xhr.statusText
    });
  }
};
xhr.open(method || 'GET',url,true);
xhr.send();
});
};
request(link)
.then(function(posts){
  let to_do = JSON.parse(posts.responseText);
  console.log("hi", to_do);
  for(i in to_do){
    console.log("hello", to_do[1].Title);
    AddItems(to_do[i].title,to_do[i].todo,to_do[i].author,to_do[i].date)
  }
})
function AddItems(title,description,author,date){
  let ul =  document.querySelector('ul');
  let liElement = document.createElement("li");
      // title
      let spanTitle = document.createElement("span");
      let txtTitle = document.createTextNode(" " + title);
      spanTitle.setAttribute("contentEditable",true);
      spanTitle.appendChild(txtTitle);

      // to do items
      let spanTodoItems = document.createElement("span");
      let txttodoItems = document.createTextNode(" \u00A0\u00A0\u00A0 " + description);
      spanTodoItems.setAttribute("contentEditable",true);
      spanTodoItems.appendChild(txttodoItems);

      // Author
      let spanAuthor = document.createElement("span");
      let txtAuthor = document.createTextNode(" \u00A0\u00A0\u00A0 " + author);
      spanAuthor.setAttribute("contentEditable",true);
      spanAuthor.appendChild(txtAuthor);

      // Date
      let spanDate = document.createElement("span");
      let txtDate = document.createTextNode("\u00A0\u00A0\u00A0" +date);
      spanDate.setAttribute("contentEditable",true);
      spanDate.appendChild(txtDate);
      
      liElement.appendChild(spanTitle);
      liElement.appendChild(spanTodoItems);
      liElement.appendChild(spanAuthor);
      liElement.appendChild(spanDate);

      ul.appendChild(liElement);

      var myNodelist = document.getElementsByTagName("LI");
      var myNodelist = document.getElementsByTagName("li");

  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);

    }
    let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
     
} 

function ClearText(){
  document.getElementById("inputTitle").value = "";
  document.getElementById("inputDescription").value = "";
  document.getElementById("inputAuthor").value = "";
  document.getElementById("inputDate").value = "";
}

//Creating Stack Class
class Stack{
  
  constructor(){

    this.items= [];
  }
  push(element)
    {
      this.items.push(element)
    }
    pop() 
    { 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 
    isEmpty() 
{ 

    return this.items.length == 0; 
} 

}
//Undo Function
let undofn=document.getElementById("undo");

function KeyPress(e) {
  let evtobj = window.event? event : e
  if (evtobj.keyCode == 90 && evtobj.ctrlKey) { 
    if(!objStackU.isEmpty()){
      let parentdiv=document.querySelector('ul').cloneNode(true);
objStackR.push(parentdiv);
   
      let ULD = document.getElementById("ULDiv");
      ULD.innerHTML=""; 
    let abc=objStackU.pop();
    ULD.appendChild(abc);
  } 
}
//REDO 
if (evtobj.keyCode == 89 && evtobj.ctrlKey) {
  if(!objStackR.isEmpty()){
  
//console.log("hi addEventListener ")
let RLD = document.getElementById("ULDiv");
  RLD.innerHTML=""; 
  let xyz=objStackR.pop();
  RLD.appendChild(xyz);
}    
}

}

  

var objStackU=new Stack();
var objStackR=new Stack();

document.onkeydown = KeyPress;