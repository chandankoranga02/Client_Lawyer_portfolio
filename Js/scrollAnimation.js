/* ===================================
   FIXED REVEAL ANIMATION
   Trigger only when section reaches viewport
=================================== */

document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".reveal");

    const firstVisit = !sessionStorage.getItem("visitedBefore");

    /* If refreshed / revisit => direct visible */
    if (!firstVisit) {
        items.forEach(item => item.classList.add("active"));
        return;
    }

    function checkReveal() {

        items.forEach(item => {

            const rect = item.getBoundingClientRect();
            const triggerPoint = window.innerHeight * 0.82;

            /* Jab actual section screen me aaye tab */
            if (rect.top < triggerPoint && rect.bottom > 0) {
                item.classList.add("active");
            }

        });

    }

    /* Scroll pe run */
    window.addEventListener("scroll", checkReveal);

    /* Load pe delay se run (not instant) */
    setTimeout(checkReveal, 300);

    sessionStorage.setItem("visitedBefore", "true");

});