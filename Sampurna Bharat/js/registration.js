// Show the appropriate registration form based on the selected tab
function showForm(role) {
    document.getElementById("government-form").style.display = "none";
    document.getElementById("doctor-form").style.display = "none";
    document.getElementById("user-form").style.display = "none";

    if (role === 'government') {
        document.getElementById("government-form").style.display = "block";
    } else if (role === 'doctor') {
        document.getElementById("doctor-form").style.display = "block";
    } else if (role === 'user') {
        document.getElementById("user-form").style.display = "block";
    }
}
