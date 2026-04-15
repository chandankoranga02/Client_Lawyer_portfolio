// FAQ TOGGLE

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        faqItems.forEach(other => {
            if(other !== item){
                other.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });
});