const submitBtn = document.querySelector(".submit-btn");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const tac = document.querySelector("#terms");
const notification = document.querySelector("#notification");

submitBtn.addEventListener("click", () => {
  if (firstName.value.length < 3) {
    showAlert("first name must be 3 characters long");
  }
});

const showAlert = (msg) => {
  let alertBox = document.querySelector(".alert-box");
  let alertMsg = document.querySelector(".alert-msg");
  alertMsg.innerHTML = msg;
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
};
