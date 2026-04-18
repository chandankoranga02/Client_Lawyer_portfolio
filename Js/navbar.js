window.addEventListener("scroll", ()=>{

    const nav = document.querySelector(".navbar");

    if(window.scrollY > 50){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }

});

/* navbar.js me paste karo */

const menuBtn = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if(navbar.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});