const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show-menu');
});

const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});