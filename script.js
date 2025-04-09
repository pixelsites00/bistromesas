let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
  showSlide(slideIndex + step);
}

showSlide(slideIndex);

// Implementar rolagem com toque
let startTouch = 0;

document.querySelector('.carousel').addEventListener('touchstart', (e) => {
  startTouch = e.touches[0].clientX;
});

document.querySelector('.carousel').addEventListener('touchend', (e) => {
  const endTouch = e.changedTouches[0].clientX;
  if (startTouch - endTouch > 50) {
    moveSlide(1);
  } else if (endTouch - startTouch > 50) {
    moveSlide(-1);
  }
});

const slides = document.querySelector(".slides-auto");
const imagens = document.querySelectorAll(".slides-auto img");
let index = 0;

setInterval(() => {
    index++;
    if(index >= imagens.length) index = 0;
    slides.style.transform = `translateX(${-index * 100}%)`;
}, 5000); // 5 segundos