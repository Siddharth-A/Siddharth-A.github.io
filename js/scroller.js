var options = {
  strings: ["Developer.", "Designer."],
  typeSpeed: 70,
  backSpeed: 50,
  smartBackspace: true,
  loop: true,
}

var typed = new Typed(".clocktext", options);

$(document).ready(function() {
    $('.abtn').click(function(){
        $('html, body').animate({scrollTop:$('#aboutme').position().top}, 'slow');
        return false;
    });
    $('.pbtn').click(function(){
        $('html, body').animate({scrollTop:$('#projects').position().top}, 'slow');
        return false;
    });
    $('.topbtn').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function responsiveBackground() {
    var windowWidth = $(window).width()
    var temphomebody = document.getElementById("temphomebody");
    var projects     = document.getElementById("projects");
    if (windowWidth < 1000) {
        temphomebody.style.backgroundAttachment = "inherit";
        projects.style.backgroundAttachment     = "inherit";
    } else if (windowWidth > 1000) {
        temphomebody.style.backgroundAttachment = "fixed";
        projects.style.backgroundAttachment     = "fixed";
        
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// function updateClock() {
// 	var d = new Date();
// 	var s = "{ ";
// 	var text = ["D", "DE", "DEV", "DEVE", "DEVEL", "DEVELO", "DEVELOP", "DEVELOPE", "DEVELOPER", "DEVELOPER."];
// 	s += text[counter++];
// 	s += " }"
// 	textElem.textContent = s;
// 	if (counter == 10) {
// 		counter = 0;
// 		setTimeout(updateClock, 3000);
// 	} else {
// 		setTimeout(updateClock, 300);
// 	}
// }
// updateClock();
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
$( window ).resize(function() {
  responsiveBackground();
});
