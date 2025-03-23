// animation and interactivity for the website

const header = document.querySelector("header");
const desktopNav = document.querySelector(".desktop");
const mobileNav = document.querySelector(".mobile");
const burgerSVG = document.querySelector(".burger-menu-icon");

window.onscroll = () => {
  if (window.scrollY > 50) {
    header.classList.add("solidify");
  } else {
    header.classList.remove("solidify");
  }
};

window.onload = () => {
  if (window.innerWidth < 768) {
    // make the header have actual height and not 0
    header.style.height = "3.75rem";

    burgerSVG.classList.remove("hidden");
    desktopNav.classList.add("hidden");
  }
};

burgerSVG.onclick = () => {
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden");
  } else {
    mobileNav.classList.add("hidden");
  }

  if (header.style.height === "3.75rem") {
    header.style.height = "18rem";
  } else {
    header.style.height = "3.75rem";
  }
};
