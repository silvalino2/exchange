function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error message
    errorMessage.textContent = "";

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
    } else if (username === "admin" && password === "admin123") {
        window.location.href = "admin.html";  // Redirect to the admin page
    } else if (username === "user" && password === "user123") {
        window.location.href = "dashboard.html";  // Redirect to the user page
    } else if (username === "staff" && password === "staff123") {
        window.location.href = "staff.html";  // Redirect to the staff page
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
}
