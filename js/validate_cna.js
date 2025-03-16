const form = document.getElementById("cna-form");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^[0-9]{10}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).{6,}$/;

function validateEmail() {
    const email = emailField.value.trim();
    if (!email) {
        alert("Email field cannot be empty!");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("Invalid email format! Please enter a valid email.");
        return false;
    }
    return true;
}

function validatePhone() {
    const phone = phoneField.value.trim();
    if (!phone) {
        alert("Phone number field cannot be empty!");
        return false;
    }
    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits!");
        return false;
    }
    return true;
}

function validatePassword() {
    if (!passwordPattern.test(passwordField.value)) {
        alert("Password must have at least 1 uppercase letter, 1 special character, and 1 number.");
        passwordField.value = "";
        passwordField.focus();
        return false;
    }
    return true;
}

function validateConfirmPassword() {
    if (passwordField.value !== confirmPasswordField.value) {
        alert("Passwords do not match!");
        return false;
    }
    return true;
}

form.addEventListener("submit", function (event) {
    if (!validateEmail() || !validatePhone() || !validatePassword() || !validateConfirmPassword()) {
        event.preventDefault();
    }
});

passwordField.addEventListener("change", validatePassword);
confirmPasswordField.addEventListener("change", validateConfirmPassword);
