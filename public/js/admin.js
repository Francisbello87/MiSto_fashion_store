let loader = document.querySelector(".loader");

const applyForm = document.querySelector(".apply-form");
const createAdmin = document.querySelector("#create-admin");
const createAdminForm = document.querySelector(".create-admin-form");
const email = document.querySelector("#email");
const submitBtn = document.querySelector(".submit-btn");

window.onload = () => {
  if (sessionStorage.user) {
    let user = JSON.parse(sessionStorage.user);
    if (compareToken(user.authToken, user.email)) {
      applyForm.classList.remove("hide");
    } else {
      location.replace("/login");
    }
  } else {
    location.replace("/login");
  }
};

createAdmin.addEventListener("click", () => {
  createAdmin.classList.add("hide");
  createAdminForm.classList.remove("hide");
  //   console.log("I worked");
});
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
const showAlert = (msg) => {
  let alertBox = document.querySelector(".alert-box");
  let alertMsg = document.querySelector(".alert-msg");
  alertMsg.innerHTML = msg;
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
};
submitBtn.addEventListener("click", () => {
  const emailValue = email.value.trim();
  if (!isValidEmail(emailValue)) {
    showAlert("Provide a valid email address");
  } else {
    loader.display = "block";
    sendData("/admin", {
      email: email.value,
    });
  }
});
