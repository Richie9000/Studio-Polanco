let overlay = document.getElementById("myNav");
let hamb = document.getElementById("Hamb");
let closeNav = document.getElementsByClassName("closebtn")[0];

// When the user clicks the button, open the modal 
hamb.onclick = function() {
    overlay.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  closeNav.onclick = function() {
    overlay.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == overlay) {
      overlay.style.display = "none";
    }
  }