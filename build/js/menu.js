var navBtn = document.querySelector('.nav__container');
var navToggle = document.querySelector('.nav__toggle');
var menu = document.querySelector('.nav__list');
var navMain = document.querySelector('.nav__menu');

menu.classList.remove('nav__list--nojs');

navBtn.addEventListener('click', function() {
  if (navToggle.classList.contains('nav__toggle--closed')) {
    navToggle.classList.remove('nav__toggle--closed');
    navToggle.classList.add('nav__toggle--opened');
    menu.classList.add('nav__list-show');
    navMain.classList.add('nav__menu--show');
  } else {
    navToggle.classList.add('nav__toggle--closed');
    navToggle.classList.remove('nav__toggle--opened');
    menu.classList.remove('nav__list-show');
    navMain.classList.remove('nav__menu--show');
  }
});
