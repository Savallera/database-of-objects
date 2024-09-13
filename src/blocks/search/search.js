if (document.querySelector('.search__filter-button')) {
  const filterButton = document.querySelector('.search__filter-button');
  const filterContainer = document.querySelector('.search__filter');
  const openFilterContainer = function () {
    filterContainer.classList.add('search__filter--opened');
  };
  const closeFilterContainer = function () {
    filterContainer.classList.remove('search__filter--opened');
  };

  filterButton.addEventListener('click', openFilterContainer);
  filterContainer.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('search__filter') ||
      evt.target.classList.contains('search__filter-close-button')
    ) {
      closeFilterContainer();
    }
  });
}
