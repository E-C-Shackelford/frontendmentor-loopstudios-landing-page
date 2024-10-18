const menuToggle = document.getElementById("menu-toggle");
const slidingPanel = document.getElementById("sliding-panel");
const navContainer = document.getElementById("nav-container");
const links = document.querySelectorAll(".c-header__link");

//////
// menu toggle
/////
// ensure menu and panel are closed by default on page load
menuToggle.classList.remove("active");
slidingPanel.classList.remove("active");

// toggle menu and panel visibility
function toggleMenu() {
  menuToggle.classList.toggle("active");
  slidingPanel.classList.toggle("active");
}

menuToggle.addEventListener("click", toggleMenu);

// nav link clicked –> panel closes and menu state resets
function closeMenu() {
  menuToggle.classList.remove("active");
  slidingPanel.classList.remove("active");
}

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

//////
// nav scroll
/////
function scrollChange() {
  // scroll down, trigger bg change
  if (window.scrollY > 0) {
    navContainer.classList.add("scrolled");
  } else {
    // return to the top, bg reverts
    navContainer.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", scrollChange);
