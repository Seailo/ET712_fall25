const form = document.getElementById("userForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

       // GRAB INPUT VALUES AND ERROR AREAS
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    // Reset all messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let valid = true;

    // NAME VALIDATION Cant be empty 
    if (name === "") {
        nameError.textContent = "Name cannot be empty.";
        valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // PASSWORD VALIDATION At least 5 characters + one of #, $, or % 
    const specialCharPattern = /[#\$%]/;
    if (password.length < 5 || !specialCharPattern.test(password)) {
        passwordError.textContent = "Password must be at least 5 characters and contain #, $, or %.";
        valid = false;
    }

    if (valid) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset(); 
    }
});
