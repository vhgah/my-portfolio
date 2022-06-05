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
const modalButtons = document.querySelectorAll(".send_project_button");
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

const workItem = document.querySelectorAll(".work__item");
function workActive() {
  workItem.forEach((item) => {
    item.classList.remove("active-work");
  });
  this.classList.add("active-work");
}
workItem.forEach((item) => item.addEventListener("click", workActive));

const getRandomKeyInArray = (arrayKeys = []) => {
  return arrayKeys[Math.floor(Math.random() * arrayKeys.length)];
};
