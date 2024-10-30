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
if (document.querySelector('.search__button--content-zones')) {
  const objectsButton = document.querySelector(
    '.search__button--content-zones'
  );
  const objectsModal = document.querySelector('.modal--content-zones');
  const openObjectsModal = function () {
    objectsModal.classList.add('modal--opened');
  };
  const closeObjectsModal = function () {
    objectsModal.classList.remove('modal--opened');
  };

  objectsButton.addEventListener('click', openObjectsModal);
  objectsModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-zones') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeObjectsModal();
    }
  });
}
if (document.querySelector('.search__button--content-services')) {
  const objectsButton = document.querySelector(
    '.search__button--content-services'
  );
  const objectsModal = document.querySelector('.modal--content-services');
  const openObjectsModal = function () {
    objectsModal.classList.add('modal--opened');
  };
  const closeObjectsModal = function () {
    objectsModal.classList.remove('modal--opened');
  };

  objectsButton.addEventListener('click', openObjectsModal);
  objectsModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-services') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeObjectsModal();
    }
  });
}
