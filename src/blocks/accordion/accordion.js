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
