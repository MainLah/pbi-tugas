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
      scroll();
      return;
    }
  }

  form.reset();
  window.alert("Pesan berhasil terkirim!");
};

const scroll = () => {
  window.scrollTo({
    top: 3600,
    behavior: "smooth",
  });
};
