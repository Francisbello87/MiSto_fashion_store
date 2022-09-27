function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

// fix nav starts
const navBar = document.querySelector(".header");
const upperNav = document.querySelector(".upper-nav");
const topNav = document.querySelector(".top-nav");
const navHeight = navBar.getBoundingClientRect().height;

function addUpperNav() {
  upperNav.classList.add("visible");
  return addUpperNav();
}

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
    upperNav.classList.add("hidden");
  } else {
    navBar.classList.remove("fix-nav");
    upperNav.classList.remove("hidden");
  }
});
// Fix nav Ends
