const NUMBER_OF_TESTIMONIAL = 4;
const testimonialWrapper = document.getElementsByClassName("swiper-wrapper");

const options = {
  method: "GET",
  url: "https://testimonial.p.rapidapi.com/api",
  headers: {
    "X-RapidAPI-Host": "testimonial.p.rapidapi.com",
    "X-RapidAPI-Key": "9ce3e0d2c2msh5a89c61da4ffa16p1fd634jsnb00b2dc10921",
  },
};

axios
  .request(options)
  .then(function (response) {
    const testimonialData = response.data;
    let arrayKeys = Object.keys(testimonialData);

    for (let i = 0; i < NUMBER_OF_TESTIMONIAL; i++) {
      testimonialWrapper[0].insertAdjacentHTML(
        "beforeend",
        testimonialCardItem(testimonialData[getRandomKeyInArray(arrayKeys)])
      );
    }

    initializationSwiper();
  })
  .catch(function (error) {
    console.error(error);
  });

const testimonialCardItem = (testimonial) => {
  return `
    <div class="testimonial__card swiper-slide">
    <img src="${testimonial?.avatar}" alt="" class="testimonial__image">
    
    <h3 class="testimonial__name">${testimonial?.name}</h3>
    <p class="testimonial__description">${testimonial?.message}</p>
    </div>`;
};
