// Selecting elements
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const toggleText = document.getElementById("toggle-text");
const toggleForm = document.getElementById("toggle-form");
const formTitle = document.getElementById("form-title");

// Toggle between Login and Sign-Up forms
toggleForm.addEventListener("click", function(event) {
  event.preventDefault();

  // Toggle form visibility
  if (loginForm.style.display === "none") {
    // Show Login form
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    formTitle.textContent = "Login";
    toggleText.innerHTML = `Don't have an account? <a href="#" id="toggle-form">Sign Up</a>`;
  } else {
    // Show Sign-Up form
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    formTitle.textContent = "Sign Up";
    toggleText.innerHTML = `Already have an account? <a href="#" id="toggle-form">Login</a>`;
  }
});
