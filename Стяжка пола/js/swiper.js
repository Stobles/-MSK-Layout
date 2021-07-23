
new Swiper('.works__cards--container',{
    observer: true,
    observeParents: true,
    freeMode: true,
    slidesPerView: 2,
    spaceBetween: 15,
    slidesPerGroup: 2,

    breakpoints:{

    }
});

new Swiper('.ourworks__container', {
    navigation: {
        nextEl: '.ourworks__next',
        prevEl: '.ourworks__prev',
      },

      loop: true,

      pagination: {
        el: '.ourworks__pagination',
        dynamicBullets: true,
      },
      centeredSlides: true,
});

new Swiper('.comments__slide--container', {
    initialSlide: 2,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    pagination: {
        el: '.comments__pagination',
      },

      breakpoints:{
        0: {
          slidesPerView: 1,
          spaceBetween: 40,
        }, 

        767:{
          slidesPerView: 2,
        }, 

        1055:{
          slidesPerView: 3
        }
      }
});