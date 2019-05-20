var dotIndex = [1,1];
var dotId = ["dots1", "dots2"];

var slideIndex = [1,1];
var slideId = ["mySlides fade", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls for dots
//n = which slide
//no = which set of slides this is
function currentSlide(n, no) {
  showSlides(slideIndex = n, no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotId[no]);
  if (n > slides.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[no]-1].style.display = "block";  
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

