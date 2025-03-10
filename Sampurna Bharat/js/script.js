document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
    });
});
