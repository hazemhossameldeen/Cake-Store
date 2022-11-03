let menu = document.querySelector(".navbar");
document.querySelector("#menu-bar").onclick = () => {
  menu.classList.toggle("active");
};

let search = document.querySelector(".search");
document.querySelector("#search").onclick = () => {
  search.classList.toggle("active");
};

var swiper = new Swiper(".products", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".blogs-products", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   navigation: {
  //     nextE1: ".swiper-button-next",
  //     prevE1: ".swiper-button-prev",
  //   },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".review-row", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 0.9,
    },
  },
});
