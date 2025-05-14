function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMsg = document.getElementById("error");
    const successMsg = document.getElementById("success");

    errorMsg.textContent = "";
    successMsg.textContent = "";

    if (name === "" || email === "" || message === "") {
        errorMsg.textContent = "All fields are required.";
        return false;
    }

    // Basic email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return false;
    }

    successMsg.textContent = "Form submitted successfully!";
    return false; // change to true if you want to actually submit
}
