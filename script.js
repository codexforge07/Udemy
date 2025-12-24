// trending-swiper
var swiper = new Swiper(".trending-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".trending-button-next",
    prevEl: ".trending-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
});

// learning-es-swiper

var swiper = new Swiper(".learn-es-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,

  pagination: {
    el: ".learn-es-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

// trending-courses

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// case-study

var swiper = new Swiper(".case-study-swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".case-study-button-next",
    prevEl: ".case-study-button-prev",
  },
  pagination: {
    el: ".case-study-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
