function handleRegistration(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation (for example purposes)
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Simulating registration success (for demo purposes)
    alert("Registration Successful!");

    // Redirect to login page after successful registration
    window.location.href = "login.html"; // Make sure you have a login.html page
}
