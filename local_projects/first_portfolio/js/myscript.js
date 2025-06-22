//11
//Sushi list
//List and Grid
// Get the elements with class="column"
var elements = document.getElementsByClassName("column11");

// Declare a loop variable
var i;

// List View
function listView11() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView11() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}


/*Script for Sushi selection */
function totalprice01() {
  var sushi = parseInt(document.getElementById("sushi01").value) //sushi size
  var qty = parseInt(document.getElementById("qty01").value) //sushi qty
  //print the price
  //document.getElementById("total01").value = sushi;

  //compute price
  document.getElementById("total01").value = qty * sushi;

  document.getElementById("sushiprice").value = sushi;

}



