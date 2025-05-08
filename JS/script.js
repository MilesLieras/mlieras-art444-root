const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show-menu');
});

const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const track = document.querySelector('.slides-track');
  const totalSlides = slides.length;

  function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }

  document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlidePosition();
  });

  document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  });

  window.addEventListener('resize', updateSlidePosition); // Recalc on resize

  updateSlidePosition(); 