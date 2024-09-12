
function toggleAccordion(target) {
  let container = target.closest('.accordion');
  let section = container.lastElementChild;
  let transitionDuration =
    parseFloat(getComputedStyle(section)['transitionDuration']) * 1000;

  if (container.dataset.slow) {
    if (container.classList.contains('accordion--opened')) {
      section.style.maxHeight = section.scrollHeight + 'px';
      section.style.overflow = null;
      setTimeout(() => {
        section.style.maxHeight = null;
      }, transitionDuration);
    } else {
      section.style.maxHeight = section.scrollHeight + 'px';
      setTimeout(() => {
        section.style.overflow = 'unset';
        section.style.maxHeight = 'unset';
      }, transitionDuration);
    }
  }

  container.classList.toggle('accordion--opened');
}

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

const mobileMenuButton = document.querySelector('.header__mobile-menu-button');
const header = document.querySelector('.header');

const openMobileMenu = function () {
  header.classList.add('header--opened');
};
const closeMobileMenu = function () {
  header.classList.remove('header--opened');
};

mobileMenuButton.addEventListener('click', openMobileMenu);
header.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('header--opened') ||
    evt.target.classList.contains('header__mobile-menu-button')
  ) {
    closeMobileMenu();
  }
});

if (document.querySelector('.search__button--content-objects')) {
  const objectsButton = document.querySelector(
    '.search__button--content-objects'
  );
  const objectsModal = document.querySelector('.modal--content-objects');
  const openObjectsModal = function () {
    objectsModal.classList.add('modal--opened');
  };
  const closeObjectsModal = function () {
    objectsModal.classList.remove('modal--opened');
  };

  objectsButton.addEventListener('click', openObjectsModal);
  objectsModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-objects') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeObjectsModal();
    }
  });
}

/* Прелодер на страницы */
// const preloaderTmp = document.querySelector('.preloader-template');
// const page = document.querySelector('.page');
// function showPreloader(tmp, parent) {
//   const node = tmp.content.cloneNode(true);
//   parent.append(node);
// }
// function removePreloader(parent, preloaderSelector) {
//   const preloader = parent.querySelector(preloaderSelector);
//   if (preloader) {
//     preloader.remove();
//   }
// }

// showPreloader(preloaderTmp, page);
// setTimeout(() => {
//   removePreloader(page, '.preloader');
// }, 1200);
