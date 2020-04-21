
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); // Change image every 2 seconds

  
}



var acc = document.getElementsByClassName("animal");
var i;
var panel = document.getElementsByClassName("description_animal");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
/*Button Play */
var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
  
}
if(playAudio==true){
    onclick=pauseAudio();
}

function pauseAudio() {
  x.pause();
}