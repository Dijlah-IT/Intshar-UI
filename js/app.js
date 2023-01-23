const heroSlider = new Swiper(".hero-slider", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  effect: "coverflow",
  spaceBetween: 20,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    scale: 1,
    slideShadows: false,
    modifier: 1,
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 38,
        scale: 1,
        modifier: 6.8,
      },
    },
  },
  pagination: {
    el: ".hero-slider-pagination",
  },
  navigation: {
    nextEl: ".hero-slider-next",
    prevEl: ".hero-slider-prev",
  },
});

const goTopBtn = document.getElementById("go-top");

goTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
