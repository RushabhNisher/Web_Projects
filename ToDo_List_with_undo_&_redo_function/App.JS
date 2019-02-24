/*// Create a "close" button and append it to each list item for already existing items
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
*/
// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
/*var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'id') {
    ev.target.classList.toggle('checked');
  }
}, false);*/

// Create a new list item when clicking on the "Add" button
function newElement() {
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
  
console.log("hi addEventListener ")
let RLD = document.getElementById("ULDiv");
  RLD.innerHTML=""; 
  let xyz=objStackR.pop();
  RLD.appendChild(xyz);
}    
}

  }

  
var objStackU=new Stack();
var objStackR=new Stack();
/*
function addStack(){
  objStackU.push(lis);
}*/
/*document.getElementById("UndoBtn").addEventListener("click", function(){ */
 
 
  


/*function operation(fn){
  history = history.slice(0, index + 1);
  var newVersion = fn(history[index]);
  history.pushState(newVersion);
  index;

}*/

/*
function Undo(index){
  var un = getElementsByClassName("Undo");


if (index > 0) index --;
var liun = document.createElement("li");
var tun = document.createTextNode(history[index]);
liun.appendChild(tun);
document.getElementById("myUL").appendChild(liun);

}
*/





/*
window.onscroll = function() {myStickyFunction()};

var header = document.getElementById("myDIV");
var sticky = header.offsetTop;

function myStickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
*/
document.onkeydown = KeyPress;