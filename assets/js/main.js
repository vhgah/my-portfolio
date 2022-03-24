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

modalCloseButtons.forEach((modalCloseButton, index) => {
  modalCloseButton.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
