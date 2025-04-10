// helper functions

const scroll = (YCoor) => {
  window.scrollTo({
    top: YCoor,
    behavior: "smooth",
  });
};

// animation and interactivity for the website

const header = document.querySelector("header");
const desktopNav = document.querySelector(".desktop");
const mobileNav = document.querySelector(".mobile");
const burgerSVG = document.querySelector(".burger-menu-icon");
const navLinks = document.querySelectorAll(".nav-links");
const coordsForNav = {
  homeCoor:
    document.querySelector("#hero").getBoundingClientRect().top +
    window.scrollY,
  catalogCoor:
    document.querySelector("#catalog").getBoundingClientRect().top +
    window.scrollY,
  testimoniesCoor:
    document.querySelector("#testi").getBoundingClientRect().top +
    window.scrollY,
  contactCoor:
    document.querySelector("#contact").getBoundingClientRect().top +
    window.scrollY,
  cart: 0,
  profile: 0,
};

/*
 *
 * I made the loop to only run 6 times because
 * there are 12 links in total but 6 of them are duplicates
 * 6 of them are for the desktop and 6 of them are for the mobile
 *
 */

for (let i = 0; i < 6; i++) {
  navLinks[i].onclick = (e) => {
    e.preventDefault();
    scroll(coordsForNav[Object.keys(coordsForNav)[i]]);
  };
  navLinks[i + 6].onclick = (e) => {
    e.preventDefault();
    scroll(coordsForNav[Object.keys(coordsForNav)[i]]);
  };
}

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
    setTimeout(() => {
      mobileNav.classList.remove("hidden");
    }, 100);
  } else {
    mobileNav.classList.add("hidden");
  }

  if (header.style.height === "3.75rem") {
    header.style.height = "18rem";
  } else {
    header.style.height = "3.75rem";
  }
};

//validate form

const errorMessage = document.querySelector("#error-message-form");
const form = document.querySelector("form");
const button = document.querySelector("#form-button");

button.onclick = (e) => {
  errorMessage.classList.add("hidden");
  e.preventDefault();

  const elements = {
    Nama: document.querySelector("#name-form"),
    Email: document.querySelector("#email-form"),
    Pesan: document.querySelector("#message-form"),
  };

  for (const key in elements) {
    if (!elements[key].value) {
      errorMessage.textContent = `${key} tidak boleh kosong!`.toUpperCase();
      errorMessage.classList.remove("hidden");
      scroll(3600);
      return;
    }
  }

  form.reset();
  window.alert("Pesan berhasil terkirim!");
};

// add to cart control

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const quantityControl = document.querySelectorAll(".quantity-control");
const confirmButtons = document.querySelectorAll(".confirm-button");
const plus = document.querySelectorAll(".quantity-plus-inputs");
const minus = document.querySelectorAll(".quantity-minus-inputs");
const quantityLabels = document.querySelectorAll(".quantity-h3");
let counter = 0;

addToCartButtons.forEach((button, i) => {
  button.onclick = () => {
    if (!button.classList.contains("hidden")) {
      button.classList.add("hidden");
      quantityControl[i].classList.remove("hidden");
    }
  };
});

confirmButtons.forEach((button, i) => {
  button.onclick = () => {
    if (!button.classList.contains("hidden")) {
      quantityControl[i].classList.add("hidden");
      addToCartButtons[i].classList.remove("hidden");
      counter = 0;
      quantityLabels[i].textContent = counter;
    }
  };
});

plus.forEach((button, i) => {
  button.onclick = () => {
    counter++;
    quantityLabels[i].textContent = counter;
    if (counter > 99) {
      counter = 99;
      quantityLabels[i].textContent = counter;
    }
  };
});

minus.forEach((button, i) => {
  button.onclick = () => {
    counter--;
    quantityLabels[i].textContent = counter;
    if (counter < 0) {
      counter = 0;
      quantityLabels[i].textContent = counter;
    }
  };
});
