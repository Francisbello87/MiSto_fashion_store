const submitBtn = document.querySelector(".submit-btn");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const tac = document.querySelector("#terms");
const notification = document.querySelector("#notification");

submitBtn.addEventListener("click", () => {
  const emailValue = email.value.trim();

  if (firstName.value.length < 3) {
    showAlert("first name must be 3 characters long");
  } else if (lastName.value.length < 3) {
    showAlert("last name must be 3 characters long");
  } else if (!isValidEmail(emailValue)) {
    showAlert("Provide a valid email address");
  } else if (password.value.length < 8) {
    showAlert("Password should be at least 8 characters long").toLowerCase();
  } else if (!confirmPassword.value.length === password.value.length) {
    showAlert("Password do not match").toLowerCase();
  }
});

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const showAlert = (msg) => {
  let alertBox = document.querySelector(".alert-box");
  let alertMsg = document.querySelector(".alert-msg");
  alertMsg.innerHTML = msg;
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
};
