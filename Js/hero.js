// HERO SECTION AUTO SLIDER JS

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove("active");
    slides[currentSlide].classList.add("exit");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");

    setTimeout(() => {
        slides.forEach(slide => slide.classList.remove("exit"));
    }, 1000);
}

// Auto Slide Every 4 Seconds
setInterval(changeSlide, 4000);