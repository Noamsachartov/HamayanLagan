// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var mailarray = [];
var makatTable = {}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");


var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Create a new list item when clicking on the "Add" button
function newElement() {
  var id = "id" + Math.random().toString(16).slice(2)
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.dataset.makatid = id;
  li.appendChild(t);
  if (!inputValue.length) {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    makatTable[id] = inputValue
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.onclick = function () { removeElement(id) }
  span.appendChild(txt);
  li.appendChild(span);
}

function removeElement(id) {
  var liDomElements = document.querySelectorAll('[data-makatid]');
  var makat = null;
  delete makatTable[id];

  for(var makatEl of liDomElements) {
    if(makatEl.dataset.makatid === id) {
      makat = makatEl
    }
  }
  if (makat) {
    makat.remove()
  }
}

function printToDiv(){
  printMakat()
}

function printMakat() {
  var makatList = Object.values(makatTable);
  for(var index = 0; index < makatList.length; index++) {
    makatList[index] = `מק׳׳ט ${index + 1}) ${makatList[index]}`+',       '
  }
  var textbox = document.getElementById("makatitems");
  var temp = makatList.join();
  textbox.innerText = temp.split(",").join("\n");
}

// show todo
function show_to_do() {
  var listTD = document.getElementById("makat_list");
  var btn = document.getElementById("btnShowTodo");
  if (listTD.style.display === "block") {
    listTD.style.display = "none";
    btn.innerHTML = "+"
  } else {
    listTD.style.display = "block";
    btn.innerHTML = "-"
  }
}