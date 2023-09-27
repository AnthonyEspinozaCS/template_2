const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryHeader = document.querySelector(".primary-header");
const headerLogo = document.querySelector(".header-logo");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

function myFunction(number) {
  const bio = document.getElementById(`more-${number}`);
  const btnText = document.getElementById(`button-${number}`);
  const dots = document.getElementById(`dots-${number}`);
  bio.classList.toggle("hidden");
  dots.classList.toggle("hidden");
  if (btnText.innerText === "Read More") btnText.innerText = "Read Less";
  else btnText.innerText = "Read More";
}

// after scrolling down 100px, add .scroll class to the #cs-navigation
window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;
  if (scroll >= 100) {
    primaryHeader.classList.add("loading");
    headerLogo.classList.remove("logo-white");
    headerLogo.classList.add("invert");
  } else {
    primaryHeader.classList.remove("loading");
    headerLogo.classList.add("logo-white");
    headerLogo.classList.remove("invert");
  }
});
