// let user = JSON.parse(sessionStorage.user || null);
// let loader = document.querySelector(".loader");

// window.onload = () => {
//   if (user) {
//     if (!compareToken(user.authToken, user.email)) {
//       location.replace("/login");
//     } else {
//       location.replace("/login");
//     }
//   }
// };

const actualPrice = document.querySelector("#actual-price");
const discountPercent = document.querySelector("#discount");
const sellPrice = document.querySelector("#sell-price");

discountPercent.addEventListener("input", () => {
  if (discountPercent.value >= 85) {
    discountPercent.value = 80;
  } else {
    let discount = (actualPrice.value * discountPercent.value) / 100;
    sellPrice.value = actualPrice.value - discount;
  }
});

sellPrice.addEventListener("input", () => {
  let discount = (sellPrice.value / actualPrice.value) * 100;
  discountPercent.value = discount;
});

let uploadImages = document.querySelectorAll(".fileupload");
let imagePaths = [];
