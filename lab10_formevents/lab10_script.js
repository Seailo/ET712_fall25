console.log(`Andrew Murray`);

// --- Collect elements ---
let myform = document.querySelector("#form1");
let username = document.querySelector("#username");
let greeting = document.querySelector(".greeting");
let displayusername = document.querySelector(".display_username");
let btnsubmit = document.querySelector(".btnsubmit");
let username_error_msg = document.querySelector(".username_error_msg");

// --- Mock “database” of taken usernames ---
const takenUsernames = ['admin', 'user123', 'testuser', 'guest', 'peterpan'];

// --- Disable the submit button on load ---
window.addEventListener("load", function () {
    btnsubmit.disabled = true;
});

// --- Username Input Event (Validation + Availability) ---
username.addEventListener("input", function () {
    const usernamevalue = username.value.trim();
    const usernamevaluelength = usernamevalue.length;

    // Length validation
    if (usernamevaluelength >= 5 && usernamevaluelength < 20) {
        // Check if username is taken
        if (takenUsernames.includes(usernamevalue.toLowerCase())) {
            username_error_msg.textContent = "❌ Username is already taken.";
            username_error_msg.style.color = "crimson";
            username.classList.add("active_input_invalid");
            username.classList.remove("active_input_valid");
            btnsubmit.disabled = true;
        } else {
            username_error_msg.textContent = "✅ Username is available!";
            username_error_msg.style.color = "green";
            username.classList.add("active_input_valid");
            username.classList.remove("active_input_invalid");
            btnsubmit.disabled = false;
        }
    } 
    else if (usernamevaluelength === 20) {
        username_error_msg.textContent = "Username can’t be 20+ characters.";
        username_error_msg.style.color = "crimson";
        btnsubmit.disabled = true;
    } 
    else {
        username_error_msg.textContent = "Username must be between 5 and 20 characters.";
        username_error_msg.style.color = "crimson";
        username.classList.add("active_input_invalid");
        username.classList.remove("active_input_valid");
        btnsubmit.disabled = true;
    }
});

// --- Form Submission Event ---
myform.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernamevalue = username.value.trim();

    // Prevent submission if username is taken or empty
    if (usernamevalue === "") {
        alert("Please enter a username.");
        return;
    }

    if (takenUsernames.includes(usernamevalue.toLowerCase())) {
        alert("This username is already taken. Please choose another one.");
        return;
    }

    // Show greeting after validation
    greeting.style.display = "block";
    displayusername.textContent = usernamevalue;

    // Clear input after submission
    username.value = "";
    btnsubmit.disabled = true;
});

// --- Password Field Styling ---
const inputpassword = document.querySelector("#password");

inputpassword.addEventListener("focus", function () {
    inputpassword.classList.add("active_input_valid");
});

inputpassword.addEventListener("blur", function () {
    inputpassword.classList.remove("active_input_valid");
    inputpassword.classList.add("active_input_invalid");
});

// --- Shuffled Word Mini-Game ---
const originalWord = "javascript";

// Function to shuffle the original word
function shuffleWord(word) {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
}

// Collect elements
const scrambleword = document.querySelector("#shuffledword");
const guessInput = document.querySelector("#guessInput");
const wordfeedback = document.querySelector("#wordfeedback");

// Show shuffled word
const shuffled = shuffleWord(originalWord);
scrambleword.textContent = shuffled;

// Guess input event
guessInput.addEventListener("input", function () {
    const guess = guessInput.value.trim();

    if (guess === originalWord) {
        wordfeedback.textContent = "✅ Correct! You guessed the word.";
        wordfeedback.style.color = "green";
        guessInput.classList.add("active_input_valid");
        guessInput.classList.remove("active_input_invalid");
    } else {
        wordfeedback.textContent = "❌ Incorrect, try again.";
        wordfeedback.style.color = "crimson";
        guessInput.classList.add("active_input_invalid");
        guessInput.classList.remove("active_input_valid");
    }
});
