const sections = document.querySelectorAll("section[id]");
function scrollActiveMenu() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActiveMenu);

const modalViews = document.querySelectorAll(".services__modal");
const modalButtons = document.querySelectorAll(".services__button");
const modalCloseButtons = document.querySelectorAll(".services__modal-close");

let activeModal = (modalClick) => {
  modalViews[modalClick].classList.add("active-modal");
};

modalButtons.forEach((modalButton, index) => {
  modalButton.addEventListener("click", () => {
    activeModal(index);
  });
});

modalCloseButtons.forEach((modalCloseButton) => {
  modalCloseButton.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

let mixerWork = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

const workItem = document.querySelectorAll(".work__item");
function workActive() {
  workItem.forEach((item) => {
    item.classList.remove("active-work");
  });
  this.classList.add("active-work");
}
workItem.forEach((item) => item.addEventListener("click", workActive));

var swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidersPerView: 2,
    },
    768: {
      slidersPerView: 2,
      spaceBetween: 48,
    },
  },
});

const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
