function style() {
  var usernameInput = document.getElementById("username");
  usernameInput.style.width = "100%";
  usernameInput.style.height = "40px";
  usernameInput.style.padding = "10px";
  usernameInput.style.border = "1px solid #ccc";

  var passwordInput = document.getElementById("password");
  passwordInput.style.width = "100%";
  passwordInput.style.height = "40px";
  passwordInput.style.padding = "10px";
  passwordInput.style.border = "1px solid #ccc";

  var submitButton = document.querySelector("input[type='submit']");
  submitButton.style.background = "#000";
  submitButton.style.color = "#ffffff";
  submitButton.style.cursor = "pointer";
}
window.onload = style;
