var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".main-pop-up");
var close = document.querySelector(".modal-close");
link.addEventListener("click", function(e) {
  e.preventDefault();
  popup.classList.add("modal-show");
});
close.addEventListener("click", function() {
  popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(e) {
  if(e.keyCode == 27) {
    if(popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
