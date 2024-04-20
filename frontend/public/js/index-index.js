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


window.onload = function () {
    tsParticles.load("tsparticles", {
        particles: {
            number: {
                value: 100
            },
            move: {
                enable: true
            },
            color: {
                value: "#ffffff"
            },

            // adding shape of particles
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            // changing the size of elements
            size: {
                value: 5,
                random: true,
                animation: {
                    enable: false,
                    speed: 40,
                    sync: false
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                },
            },
        }
    });
}


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
            main.style.opacity = '1';
            main.style.filter = 'blur(0px)';
            footer.style.filter = 'blur(0px)';
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

