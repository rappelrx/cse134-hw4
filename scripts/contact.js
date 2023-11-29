// Email Field

let email = document.getElementById("email");
let emailError = document.getElementById("email-error");
email.setCustomValidity("");
email.addEventListener("input", validateEmail);

function validateEmail() {
    if (email.checkValidity) {
        emailError.textContent = "";
        emailError.classList.remove("fade-out");
    } else {
        emailError.textContent = "Please enter a valid email.";
        emailError.classList.add("fade-out");
    }
}

// Comments Word Count

let commentsTextarea = document.getElementById("comments");
let charCountOutput = document.getElementById("comments-char-count");

commentsTextarea.addEventListener("input", function () {
  updateCharCount();
});

function updateCharCount() {
  // Get the current character count
  let currentCharCount = commentsTextarea.value.length;

  // Update the character count output
  let charRemain = 800 - currentCharCount;
  charCountOutput.textContent = charRemain + " characters left";

  // Change text color based on the character count
  if (currentCharCount > 700) {
    charCountOutput.style.color = "red";
  } else if (currentCharCount > 600) {
    charCountOutput.style.color = "orange";
  } else {
    charCountOutput.style.color = "green"; // Reset to default color
  }
}
