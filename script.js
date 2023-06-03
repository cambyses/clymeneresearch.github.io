const arrowIcon = document.querySelector(".arrow");
const nav = document.querySelector("nav");
const navButton = document.querySelector(".nav-button");
const navSecondSection = document.querySelector(".second-section");

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar-link");
  var currentPage = window.location.href;

  navLinks.forEach(function (link) {
    if (link.href === currentPage) {
      link.classList.add("active");
      console.log(link.href);
    }
  });
});

navButton.addEventListener("click", () => {
  if (nav.classList.contains("active-menu")) {
    console.log(nav);
    nav.classList.remove("active-menu");
  } else {
    nav.classList.add("active-menu");
    console.log(nav);
  }
  //   navSecondSection.classList.add("active-menu");
  //   nav.style.height = "100%";
  //   nav.style.border = "3px solid blue";
});
