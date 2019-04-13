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
    var text = "Welcome to My eResume!";
    var speed = 135;
    if(i < text.length) {
        if(i == 0) {
            document.getElementById("text").innerHTML = " ";
        }
        setTimeout(typeWriter, speed);           document.getElementById("text").innerHTML += text.charAt(i);         ++i;
    }
}
