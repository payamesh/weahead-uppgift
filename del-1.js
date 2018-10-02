//spara tid(project)
/*
document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementsByName('project');
    if (localStorage['project']) { // info om vilket projekt
        input.value = localStorage['project']; // vilket projekt
    }
    input.onchange = function() {
        localStorage['project'] = this.value; // byt vid ändring
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementByName('activity');
    if (localStorage['activity']) { // info om vilken aktivitet
        input.value = localStorage['activity']; // vilken aktivitet
    }
    input.onchange = function() {
        localStorage['activity'] = this.value; // byt vid ändring
    }
});*/


function createElement() {
    var tablerow = document.createElement('TR');
    tablerow.setAttribute("id", "post1");

    var from = document.getElementByName('from').value;
    var to = document.getElementByName('to').value;
    var listItems = [from, to];
    //hinner ej testa detta men tänker  : 
    //plocka alla values, projekt, aktivitet, tider, och sedan göra en for-loop som appendar alla td-poster till tr

    var t = document.createTextNode(listItems)
    tablerow.appendChild(t);
    if (inputValue === '') {
        alert("Fyll i en tid");
    } else {
        document.getElementById("post1").appendChild(tablerow);
    }
    document.getElementsByTagName('submit').addEventListener('click', createElement);

}


//ta bort från listan vid knapptryck
var close = document.getElementsByClassName("action-delete");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//
var deleteButton = document.getElementsByClassName("action-delete");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("td");
    var txt = document.createTextNode("\u00D7");
    span.className = "action-delete";
    span.appendChild(txt);
    deleteButton[i].appendChild(span);
}