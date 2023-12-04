document.addEventListener("DOMContentLoaded", function () {
  let form_errors = [];

  // Name Field

  let fullName = document.getElementById("fullname");
  let nameError = document.getElementById("fullname-error");
  fullName.setCustomValidity("");
  fullName.addEventListener("input", validateName);

  function validateName() {
    if (!fullName.checkValidity()) {
      let error = nameError.textContent = "Error: invalid full name.";
      form_errors.push(error);
      nameError.classList.add("fade-out");
    } else {
      nameError.textContent = "";
      nameError.classList.remove("fade-out");
    }
  }

  // Email Field

  let email = document.getElementById("email");
  let emailError = document.getElementById("email-error");
  email.setCustomValidity("");
  email.addEventListener("input", validateEmail);

  function validateEmail() {
    if (!email.checkValidity()) {
      let error = emailError.textContent = "Error: invalid email.";
      form_errors.push(error);
      emailError.classList.add("fade-out");
    } else {
      emailError.textContent = "";
      emailError.classList.remove("fade-out");
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

  // Capture Form Errors

  let form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
    }
    let formErrors = document.createElement("input");
    formErrors.name = "form-errors";
    formErrors.value = JSON.stringify(form_errors);
    formErrors.type = "hidden";
    form.appendChild(formErrors);
  });
});
