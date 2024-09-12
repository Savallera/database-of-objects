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
