//JQUERY
$(document).ready(function () {

    //Signup form
    $('.signup-form hr').waypoint(function (direction) {
        if (direction == "down") {
            $('.signup-form form .text').addClass('fadein-down');
        } else {
            $('.signup-form form .text').removeClass('fadein-down');
        }
    },
        {
            // offset: function() {
            //     return $(this.element).height() / 2; // Trigger when the element is halfway visible in the viewport
            // }   
            offset: '50%',
        });

    $('.signup-form .text').waypoint(function (direction) {
        if (direction == "down") {
            $('.signup-form form .wrapper').addClass('fadein-down');
        } else {
            $('.signup-form form .wrapper').removeClass('fadein-down');
        }
    },
        {
            offset: '50%',
        });

    $('.signup-form .wrapper').waypoint(function (direction) {
        if (direction == "down") {
            $('.signup-form form .formBtn').addClass('fadein-down');
        } else {
            $('.signup-form form .formBtn').removeClass('fadein-down');
        }
    },
        {
            offset: '60%',
        });

    //Login form
    $('.login-form hr').waypoint(function (direction) {
        if (direction == "down") {
            $('.login-form form .text').addClass('fadein-down');
        } else {
            $('.login-form form .text').removeClass('fadein-down');
        }
    },
        {
            offset: '50%',
        });

    $('.login-form .text').waypoint(function (direction) {
        if (direction == "down") {
            $('.login-form form .wrapper').addClass('fadein-down');
        } else {
            $('.login-form form .wrapper').removeClass('fadein-down');
        }
    },
        {
            offset: '50%',
        });

    $('.login-form .wrapper').waypoint(function (direction) {
        if (direction == "down") {
            $('.login-form form .formBtn').addClass('fadein-down');
        } else {
            $('.login-form form .formBtn').removeClass('fadein-down');
        }
    },
        {
            offset: '60%',
        });

    $('.login-form .formBtn').waypoint(function (direction) {
        if (direction == "down") {
            // $('#signupTarget').addClass('fadein-down')
            $('#signupTarget').addClass('opacity')
        } else {
            // $('#signupTarget').removeClass('fadein-down');
            $('#signupTarget').removeClass('opacity');
        }
    },
        {
            offset: '60%',
        });
});



document.addEventListener("DOMContentLoaded", function() {
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;  
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");  
  }  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}  

function plusSlide(n){
    showSlides(slideIndex += n);
}    

//Auto
function autoSlide(){
    plusSlide(1);
}    

setInterval(autoSlide, 10000);

// Thumbnail controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}    
});

//Responsive menu
document.addEventListener('DOMContentLoaded', function() {
    let menuBtn = document.getElementById('menuBtn');
    let menu = document.getElementById('menu');
    let img = document.querySelector('.nav-resp .menu-btn img');
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');

    menuBtn.addEventListener('click', function () {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
            img.src = '/svg/menu.svg'; 
            main.style.filter = 'blur(0px)';
            footer.style.filter = 'blur(0px)';
            main.style.opacity = '1';
            footer.style.opacity = '1';
        } else {
            menu.style.display = 'block';
            img.src = '/svg/cross.svg'; 
            main.style.filter = 'blur(10px)';
            footer.style.filter = 'blur(10px)';
            main.style.opacity = '0.50';
            footer.style.opacity = '0.50';
        }
    });
});
