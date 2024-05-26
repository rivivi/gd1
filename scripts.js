// scripts.js
let currentIndex1 = 0;

function showSlides1(index) {
    const slides = document.querySelectorAll('.slide1');
    if (index >= slides.length) {
        currentIndex1 = 0;
    } else if (index < 0) {
        currentIndex1 = slides.length - 1;
    } else {
        currentIndex1 = index;
    }

    const offset = -currentIndex1 * 100;
    document.querySelector('.slides1').style.transform = `translateX(${offset}%)`;
}

function moveSlides1(step) {
    showSlides1(currentIndex1 + step);
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    moveSlides1(1);
}, 5000);

// Initialize the slider
showSlides1(currentIndex1);

// scripts.js
$(document).ready(function(){
    $('.slider2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});




