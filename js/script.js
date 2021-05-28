window.onload = () => {
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.navbar');
  const close = document.querySelector('.close');
  burger.addEventListener('click', () => {
    navbar.classList.add('is-open');
  });
  close.addEventListener('click', () => {
    navbar.classList.remove('is-open');
  });
};