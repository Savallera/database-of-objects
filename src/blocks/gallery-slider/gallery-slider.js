window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер новостей на главной странице
    if (document.querySelector('#gallery-slider')) {
      let gallerySlider = new Splide('#gallery-slider', {
        type: 'slide',
        pagination: false,
        arrows: true,
        gap: '1em',
      });
      gallerySlider.mount();
    }
  }
});
