const cardContainers = [...document.querySelectorAll(".card-container")];
const nxtBtn = [...document.querySelectorAll(".next-btn")];
const preBtn = [...document.querySelectorAll(".prev-btn")];
const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".small-images");
const bigImage = document.querySelector(".big-product-img");
const colorPick = document.querySelectorAll(".color-pick-product img");
const colorNotation = document.querySelector(".color-notation");
const sizeBtns = document.querySelectorAll(".size-radio-btn");
const sizeNotations = document.querySelector(".size-notation");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

let activeImageSlide = 0;
const totalSlides = productImages.length;

productImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    productImages[activeImageSlide].classList.remove("active");
    item.classList.add("active");
    bigImage.style.backgroundImage = `url('${item.src}')`;
    activeImageSlide = i;
  });
});

let activeColorpick = 0;

colorPick.forEach((item, i) => {
  function checkColor() {
    if (activeColorpick === 1) {
      colorNotation.textContent = "Pink";
      // console.log("help me");
    } else if (activeColorpick === 2) {
      colorNotation.textContent = "Black";
    } else if (activeColorpick === 3) {
      colorNotation.textContent = "Grey";
    } else {
      colorNotation.textContent = "Blue";
    }
  }
  item.addEventListener("click", () => {
    colorPick[activeColorpick].classList.remove("color-active");
    item.classList.add("color-active");
    bigImage.style.backgroundImage = `url('${item.src}')`;
    activeColorpick = i;
    checkColor();
  });
});

let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
  function sizePick() {
    if (checkedBtn === 1) {
      sizeNotations.textContent = "Small";
      // console.log("help me");
    } else if (checkedBtn === 2) {
      sizeNotations.textContent = "Medium";
    } else if (checkedBtn === 3) {
      sizeNotations.textContent = "Large";
    } else if (checkedBtn === 4) {
      sizeNotations.textContent = "Extra Large";
    } else if (checkedBtn === 5) {
      sizeNotations.textContent = "Extra Extra Large";
    } else {
      sizeNotations.textContent = "Extra Small";
    }
  }
  item.addEventListener("click", () => {
    sizeBtns[checkedBtn].classList.remove("check");
    item.classList.add("check");
    checkedBtn = i;
    sizePick();
  });
});

let productId = null;
if (location.pathname != "/products") {
  productId = decodeURI(location.pathname.split("/").pop());
  console.log(productId);
}
