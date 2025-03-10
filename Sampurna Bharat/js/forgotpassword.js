// Function to handle the forgot password form submission
function sendResetLink(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    // Simulate sending reset link
    alert(`A password reset link has been sent to ${email}.`);

    // Redirect to reset password page (for demonstration purposes)
    setTimeout(() => {
        window.location.href = "resetpassword.html";
    }, 2000);
}

// Function to handle the reset password form submission
function resetPassword(event) {
    event.preventDefault();
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Simulate password reset
    alert("Your password has been reset successfully!");
    window.location.href = "login.html";
}
