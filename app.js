const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  navbar.classList.toggle('active');
});

window.addEventListener("scroll", function() {
  navbar.classList.toggle('while-scroll', window.scrollY > 0);
});