
const PUBLIC_KEY = "123";
const SERVICE_KEY = "123";
const TEMPLATE_KEY = "123";



emailjs.init(PUBLIC_KEY);

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Indian Mobile Validation (10 digits, starts with 6-9)
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
    btn.innerText = "Sending...";
    btn.disabled = true;

    const templateParams = {
        fullname: fullname,
        subject: subject,
        mobile: mobile,
        email: email,
        message: message
    };

    emailjs.send(
        SERVICE_KEY,
        TEMPLATE_KEY,
        templateParams
    )
        .then(function () {
            alert("Message sent successfully!");
            contactForm.reset();
        })
        .catch(function (error) {
            alert("Failed to send message.");
            console.log(error);
        })
        .finally(function () {
            btn.innerText = "Send Message";
            btn.disabled = false;
        });
});