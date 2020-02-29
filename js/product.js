  // Get the elements with class="column"
  var elements = document.getElementsByClassName("column");
  
  // Declare a loop variable
  var i;
  
function xup(x) {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = 100/x +"%";  // IE10
    elements[i].style.flex = 100/x +"%"; 
  }
}


  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("btnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }