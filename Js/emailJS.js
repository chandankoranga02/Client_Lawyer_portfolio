const PUBLIC_KEY = "dIuGsXL9RJIWm4bi6";
const SERVICE_KEY = "service_nsb08tq";
const TEMPLATE_KEY = "template_nvdtaoq";

emailjs.init(PUBLIC_KEY);

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[6-9]\d{9}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const btn = contactForm.querySelector("button");

    /* SENDING STATE */
    btn.innerText = "Sending...";
    btn.disabled = true;
    btn.style.background = "#f59e0b";   // orange
    btn.style.color = "#000";
    btn.style.cursor = "not-allowed";

    const templateParams = {
        fullname,
        subject,
        mobile,
        email,
        message
    };

    emailjs.send(SERVICE_KEY, TEMPLATE_KEY, templateParams)

    .then(() => {

        /* SUCCESS STATE */
        btn.innerText = "Sent ✓";
        btn.style.background = "#16a34a";   // green
        btn.style.color = "#fff";

        contactForm.reset();

        setTimeout(() => {
            btn.innerText = "Send Message";
            btn.disabled = false;
            btn.style.background = "";
            btn.style.color = "";
            btn.style.cursor = "pointer";
        }, 2500);

    })

    .catch((error) => {
        console.error(error);

        /* FAILED STATE */
        btn.innerText = "Failed ✕";
        btn.style.background = "#dc2626";   // red
        btn.style.color = "#fff";

        setTimeout(() => {
            btn.innerText = "Send Message";
            btn.disabled = false;
            btn.style.background = "";
            btn.style.color = "";
            btn.style.cursor = "pointer";
        }, 2500);

    });

});