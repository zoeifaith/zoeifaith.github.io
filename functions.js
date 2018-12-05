var i = 0;
function typeWriter() {
    var text = "Hello World!";
    var speed = 150;
    if(i < text.length) {
        if(i == 0) {  
            document.getElementById("text").innerHTML = " ";
            //setTimeout(typeWriter,1000);
        }
        setTimeout(typeWriter, speed);           document.getElementById("text").innerHTML += text.charAt(i);         ++i;
    }
}

