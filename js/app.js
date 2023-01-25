// * home hero slider
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

// * feature slider

if (document.querySelector(".feature-slider")) {
  const featureSlider = new Swiper(".feature-slider", {
    slidesPerView: 3,
    loop: true,
    effect: "coverflow",
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 0,
      stretch: -20,
      depth: 30,
      scale: 0.9,
      modifier: 1,
    },

    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 5,
        spaceBetween: 70,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 30,
          scale: 0.9,
          modifier: 1,
        },
      },
    },

    navigation: {
      nextEl: ".feature-slider-next",
      prevEl: ".feature-slider-prev",
    },
    autoplay: {
      delay: 3000,
    },
  });
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("home-news__bg", "./js/particlesjs-news-config.json");

particlesJS.load("app-section-bg", "./js/particlesjs-app-sec-config.json");

// * news slider

if (document.querySelector(".news-slider")) {
  const newsSlider = new Swiper(".news-slider", {
    spaceBetween: 40,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1540: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".news-slider-next",
      prevEl: ".news-slider-prev",
    },
  });
}

// * go top

const goTopBtn = document.getElementById("go-top");

goTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
