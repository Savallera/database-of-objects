window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер новостей на главной странице
    if (document.querySelector('#gallery-slider')) {
      let gallerySlider = new Splide('#gallery-slider', {
        classes: {
          arrows: 'splide__arrows gallery-slider__arrows',
          arrow: 'splide__arrow gallery-slider__arrow',
          prev: 'splide__arrow--prev gallery-slider__arrow--prev',
          next: 'splide__arrow--next gallery-slider__arrow--next',
        },
        type: 'slide',
        pagination: false,
        arrows: true,
        gap: '1em',
      });
      gallerySlider.mount();
    }
    // Для галереи
    if (document.querySelector('#gallery-slider-02')) {
      let gallerySlider = new Splide('#gallery-slider-02', {
        classes: {
          arrows: 'splide__arrows gallery-slider__arrows',
          arrow: 'splide__arrow gallery-slider__arrow',
          prev: 'splide__arrow--prev gallery-slider__arrow--prev',
          next: 'splide__arrow--next gallery-slider__arrow--next',
        },
        type: 'slide',
        pagination: false,
        arrows: true,
        gap: '1em',
      });
      gallerySlider.mount();
    }
    if (document.querySelector('#gallery-slider-03')) {
      let gallerySlider = new Splide('#gallery-slider-03', {
        classes: {
          arrows: 'splide__arrows gallery-slider__arrows',
          arrow: 'splide__arrow gallery-slider__arrow',
          prev: 'splide__arrow--prev gallery-slider__arrow--prev',
          next: 'splide__arrow--next gallery-slider__arrow--next',
        },
        type: 'slide',
        pagination: false,
        arrows: true,
        gap: '1em',
      });
      gallerySlider.mount();
    }
    if (document.querySelector('#gallery-slider-04')) {
      let gallerySlider = new Splide('#gallery-slider-04', {
        classes: {
          arrows: 'splide__arrows gallery-slider__arrows',
          arrow: 'splide__arrow gallery-slider__arrow',
          prev: 'splide__arrow--prev gallery-slider__arrow--prev',
          next: 'splide__arrow--next gallery-slider__arrow--next',
        },
        type: 'slide',
        pagination: false,
        arrows: true,
        gap: '1em',
      });
      gallerySlider.mount();
    }
  }
});
