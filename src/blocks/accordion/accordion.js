function toggleAccordion(target) {
  let container = target.closest('.accordion');

  target.classList.toggle('accordion__button--actived');
  container.classList.toggle('accordion--opened');
}
