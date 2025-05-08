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
  const slides = document.querySelectorAll(".slide");
  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  };

  const nextSlide = () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  };

  const prevSlide = () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  };

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  // Initialize
  showSlide(slideIndex);
