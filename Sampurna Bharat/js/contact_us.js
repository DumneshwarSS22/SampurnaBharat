// JavaScript for handling the contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert("Your message has been sent successfully!");
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill in all fields.");
    }
});
