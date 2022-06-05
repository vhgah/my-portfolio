const workContainer = document.getElementById("work_container");

const renderWorkItem = (project) => {
  return `<div class="work__card mix ${project?.type}">
    <a target="_blank" href="${project?.link}"><img src="assets/img/${project?.image}" alt="${project?.decription}" class="work__image"></a>
    <h3 class="work__title">${project?.name}</h3>
    <a target="_blank" href="${project?.link}" class="work__button">
      Demo <i class="bx bx-right-arrow-alt work__icon"></i>
    </a>
  </div>`;
};

let workCardElement = "";
projects.forEach((project) => {
  workCardElement += renderWorkItem(project);
});

workContainer.insertAdjacentHTML("beforeend", workCardElement);

mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  load: {
    filter: ".web_commerce",
  },
  animation: {
    duration: 300,
  },
});

