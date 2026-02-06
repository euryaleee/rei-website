const slides = document.querySelectorAll(".carousel .slide");
let total = slides.length;
let current = 1; // start with center slide

function updateCarousel() {
  slides.forEach(slide => slide.classList.remove("active"));
  
  // Circular rotation
  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  slides[prev].style.order = 1;
  slides[current].style.order = 2;
  slides[next].style.order = 3;

  slides[prev].classList.remove("active");
  slides[next].classList.remove("active");
  slides[current].classList.add("active");
}

// Rotate every 3.5s
setInterval(() => {
  current = (current + 1) % total;
  updateCarousel();
}, 3500);

updateCarousel();
