const track = document.querySelector('.image_track');
const next = document.querySelector('.right_btn');
const prev = document.querySelector('.left_btn');
const images = document.querySelectorAll('.image_track img');

let index = 0;

function updateSlide() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

next.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateSlide();
});

prev.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateSlide();
});

window.addEventListener('resize', updateSlide);
