const loader = document.querySelector(".loader");
const submitBtn = document.querySelector(".submit-btn");
const fname = document.querySelector("#fname") || null;
const username = document.querySelector("#username") || null;
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password") || null;
const tac = document.querySelector("#terms") || null;
const notification = document.querySelector("#notification") || null;

window.onload = () => {
  if (sessionStorage.user) {
    user = JSON.parse(sessionStorage.user);
    if (compareToken(user.authToken, user.email)) {
      location.replace("/");
    }
  }
};

submitBtn.addEventListener("click", () => {
  const emailValue = email.value.trim();
  const checkPassword = password.value;

  if (fname != null) {
    if (fname.value === "") {
      showAlert("Name can't be empty");
    } else if (username.value.length < 3) {
      showAlert("username must be 3 characters long");
    } else if (!isValidEmail(emailValue)) {
      showAlert("Provide a valid email address");
    } else if (password.value.length < 8) {
      showAlert("Password should be at least 8 characters long");
    } else if (confirmPassword.value !== checkPassword) {
      showAlert("Password do not match");
    } else if (!tac.checked) {
      showAlert("You must agree to our terms and condition");
    } else {
      loader.style.display = "block";
      sendData("/signup", {
        fname: fname.value,
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        tac: tac.checked,
        notification: notification.checked,
        seller: false,
      });
    }
  } else {
    if (!isValidEmail(emailValue) || !password.value.length) {
      showAlert("Enter e-mail and password");
    } else {
      loader.style.display = "block";
      sendData("/login", {
        email: email.value,
        password: password.value,
      });
    }
  }
});

const sendData = (path, data) => {
  fetch(path, {
    method: "post",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json(data))
    .then((response) => {
      processData(response);
      console.log(response);
      // console.log(path);
    });
};

const processData = (data) => {
  loader.style.display = null;
  if (data.alert) {
    showAlert(data.alert);
  } else if (data.fname) {
    data.authToken = generateToken(data.email);
    sessionStorage.user = JSON.stringify(data);
    location.replace("/");
  }
};

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
