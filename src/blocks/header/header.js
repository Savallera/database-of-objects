if (document.querySelector('.header__mobile-menu-button')) {
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
}
