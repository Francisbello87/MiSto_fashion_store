const cardContainers = [...document.querySelectorAll(".card-container")];
const nxtBtn = [...document.querySelectorAll(".next-btn")];
const preBtn = [...document.querySelectorAll(".prev-btn")];

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
