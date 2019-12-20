
$(document).ready(function () {


    $(".sendBtn").on("click", function () {
        event.preventDefault();
    })

    // type-writer function
    var i = 0;
    var txt = 'Welcome!';
    var speed = 125;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typeEffect").textContent += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();


    // materialize css carousel function
    $('.carousel').carousel({
        shift: 60
    });

    // materialize css function to zoom images
    $('.materialboxed').materialbox();


});


