// Navbar slide functionality
document.getElementById("slide-btn").addEventListener("mouseover", function(event) {
      document.getElementById("slide").style.right = "0px";
    });
    document.getElementById("slide").addEventListener("mouseleave", function(event) {
      document.getElementById("slide").style.right = "-300px";
    });

/* Adds smooth scroll */
$(document).ready(function() {
  $(".scrollLink").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

var i = 0;
function typeWriter() {
  var text = " Hello, World!";
  var speed = 200;
  if(i < text.length) {
    if(i == 0) {
      document.getElementById("text").innerHTML = " ";
    }
    setTimeout(typeWriter, speed);           document.getElementById("text").innerHTML += text.charAt(i);  
    if(i == text.length-1) {
      setTimeout(typeWriterReset, 2000);
    }
    ++i;
  }
}

function typeWriterReset() {
  i = 0;
  typeWriter();
}

