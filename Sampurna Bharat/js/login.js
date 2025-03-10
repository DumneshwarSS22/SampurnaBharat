// Redirect based on login option selected
function redirectTo(role) {
    if (role === 'government') {
        window.location.href = 'government-dashboard.html';
    } else if (role === 'doctor') {
        window.location.href = 'doctor-dashboard.html';
    } else if (role === 'user') {
        window.location.href = 'user-dashboard.html';
}

// Handle login form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        alert("Login successful!");
        // Redirect to dashboard based on role (for demonstration)
        window.location.href = 'user-dashboard.html';
    }
})};
