/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Мы подключаем Swider Slider с node_modules
// При необходимости подключите дополнительные модули слайдера, указав на них в {} черезКому
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, EffectFade, EffectFlip } from "swiper"
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Посмотрите больше https://swiperjs.com/
*/

// Стили Swiper
// Основные стили
import "../../scss/base/swiper.scss"
// Полный набор стилей с scss/libs/swiper.scss
import "../../scss/libs/swiper.scss"
// Полный набор стилей с node_modules
import "swiper/css"

// Инициализация ползунков
function initSliders() {
  // Список ползунков
  // Проверьте, находится ли слайдер на странице

  if (document.querySelector(".sliderblock__territory")) {
    // Укажите навык желаемого ползунка
    // создаем слайдеры через  -- ; --
    new Swiper(".sliderblock__territory", {
      // selector
      modules: [Navigation, EffectFade],
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,

      navigation: {
        prevEl: ".slider-controls__button-prev.territory", //selector
        nextEl: ".slider-controls__button-next.territory", //selector
      },
    })
  }
  if (document.querySelector(".sliderblock__transport")) {
    // Укажите навык желаемого ползунка
    // создаем слайдеры через  -- ; --
    new Swiper(".sliderblock__transport", {
      // selector
      modules: [Navigation, EffectFade],
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      navigation: {
        prevEl: ".slider-controls__button-prev.transport", //selector
        nextEl: ".slider-controls__button-next.transport", //selector
      },
    })
  }
  if (document.querySelector(".slider-tokio__slider")) {
    // Укажите навык желаемого ползунка
    // создаем слайдеры через  -- ; --
    new Swiper(".slider-tokio__slider", {
      // selector
      modules: [Navigation, EffectFlip],
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
      speed: 800,
      navigation: {
        prevEl: ".slider-controls__button-prev.tokio", //selector
        nextEl: ".slider-controls__button-next.tokio", //selector
      },
      on: {
        init: function () {
          document.querySelector("[data-tokio-count]").innerHTML =
            +this.slides.length
        },
      },
    })
  }
  if (document.querySelector(".slider-bergen__slider")) {
    // Укажите навык желаемого ползунка
    // создаем слайдеры через  -- ; --
    new Swiper(".slider-bergen__slider", {
      // selector
      modules: [Navigation, EffectFlip],
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
      speed: 800,
      navigation: {
        prevEl: ".slider-controls__button-prev.bergen", //selector
        nextEl: ".slider-controls__button-next.bergen", //selector
      },
      on: {
        init: function () {
          document.querySelector("[data-bergen-count]").innerHTML =
            +this.slides.length
        },
      },
    })
  }
  if (document.querySelector(".slider-york__slider")) {
    // Укажите навык желаемого ползунка
    // создаем слайдеры через  -- ; --
    new Swiper(".slider-york__slider", {
      // selector
      modules: [Navigation, EffectFlip],
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
      speed: 800,
      navigation: {
        prevEl: ".slider-controls__button-prev.york", //selector
        nextEl: ".slider-controls__button-next.york", //selector
      },
      on: {
        init: function () {
          document.querySelector("[data-york-count]").innerHTML =
            +this.slides.length
        },
        slideChange: function () {
          //console.log(this)
        },
      },
    })
  }
  if (document.querySelector(".item-choose126__slider")) {
    // Укажите навык желаемого ползунка
    // создаем слайдеры через  -- ; --
    new Swiper(".item-choose126__slider", {
      // selector
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: false,
      speed: 800,
      navigation: {
        prevEl: ".controls-choose126__btn-prev", //selector
        nextEl: ".controls-choose126__btn-next", //selector
      },
    })
  }
  if (document.querySelector(".item-choose135__slider")) {
    // Укажите навык желаемого ползунка
    // создаем слайдеры через  -- ; --
    new Swiper(".item-choose135__slider", {
      // selector
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: false,
      speed: 800,
      navigation: {
        prevEl: ".controls-choose135__btn-prev", //selector
        nextEl: ".controls-choose135__btn-next", //selector
      },
    })
  }
  if (document.querySelector(".item-choose120__slider")) {
    // Укажите навык желаемого ползунка
    // создаем слайдеры через  -- ; --
    new Swiper(".item-choose120__slider", {
      // selector
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: false,
      speed: 800,
      navigation: {
        prevEl: ".controls-choose120__btn-prev", //selector
        nextEl: ".controls-choose120__btn-next", //selector
      },
    })
  }
  if (document.querySelector(".item-choose131__slider")) {
    // Укажите навык желаемого ползунка
    // создаем слайдеры через  -- ; --
    new Swiper(".item-choose131__slider", {
      // selector
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: false,
      speed: 800,
      navigation: {
        prevEl: ".controls-choose131__btn-prev", //selector
        nextEl: ".controls-choose131__btn-next", //selector
      },
    })
  }
}
// Свиток на основе слайдера (по классу swiper scroll дляОболонкиСлайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar")
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ползунков инициализации
  initSliders()
  // Запуск инициализации прокрутки на слайдере (по классу swiper_scroll)
  //initSlidersScroll();
})
