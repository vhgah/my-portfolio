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
