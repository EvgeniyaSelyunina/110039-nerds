var link = document.querySelector(".btn-write");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-close");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-open");
  username.focus();
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-open");
  popup.classList.remove("feedback-error");
});
form.addEventListener("submit", function(event) {
  if (!username.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    console.log("Нужно ввести логин и пароль");
    popup.classList.add("feedback-error");
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-open")) {
      popup.classList.remove("feedback-open");
      popup.classList.remove("feedback-error");
    }
  }
});
